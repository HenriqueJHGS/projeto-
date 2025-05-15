import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { BuildingIcon } from 'lucide-react';
import Card, { CardHeader } from '../common/Card';
import Button from '../common/Button';
import Badge from '../common/Badge';
import { projects } from '../../utils/dummyData';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issues
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

// Fix default icon issue
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerIconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const ProjectsMap: React.FC = () => {
  // Get projects with valid coordinates
  const validProjects = projects.filter(project => 
    project.location.coordinates && 
    project.location.coordinates.length === 2
  );

  const center: [number, number] = [39.8283, -98.5795]; // Approximate center of the US
  
  return (
    <Card className="h-full">
      <CardHeader 
        title={
          <div className="flex items-center">
            <BuildingIcon size={18} className="text-primary-600 mr-2" />
            <span>Projects Map</span>
          </div>
        }
        subtitle="Geographic distribution of projects"
        action={
          <Button size="sm" variant="outline">View All</Button>
        }
      />
      <div className="h-[350px] w-full rounded-md overflow-hidden mt-4">
        <MapContainer 
          center={center} 
          zoom={4} 
          style={{ height: '100%', width: '100%' }}
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {validProjects.map(project => (
            <Marker 
              key={project.id} 
              position={project.location.coordinates as [number, number]}
            >
              <Popup>
                <div className="p-1">
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                  <p className="text-sm text-gray-600">{project.location.city}, {project.location.state}</p>
                  <div className="mt-1">
                    <Badge 
                      text={project.status.replace('_', ' ')} 
                      variant={
                        project.status === 'completed' ? 'success' :
                        project.status === 'in_progress' ? 'primary' :
                        project.status === 'planning' ? 'warning' : 'error'
                      }
                      size="sm"
                    />
                  </div>
                  <div className="mt-2 text-xs">
                    <span className="text-gray-500">Units: </span>
                    <span className="font-medium">{project.availableUnits}/{project.units} available</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </Card>
  );
};

export default ProjectsMap;