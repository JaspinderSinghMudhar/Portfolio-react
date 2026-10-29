import InfiniteMenu from '../components/InfiniteMenu';
import { useEffect, useState } from 'react';
import axios from 'axios';

const mapProject = project => {
    const imageName = project.image
        .replace(/^https:\/\/jaspinder-singh\.com\/wp-content\/uploads\/\d{4}\/\d{2}\//, '')
        .replace(/^\/+/, '');

    return {
        image: `/projects/${imageName}`,
        link: project.project_url,
        title: project.title,
        description: project.dis
    };
};


function Projects() {
    const [newMappedItems, setNewMappedItems] = useState(() => items_new.map(mapProject));

    useEffect(() => {
        const apiUrl = import.meta.env.VITE_API_URL || '';
        axios.get(`${apiUrl}/api/projects`)
            .then(response => {
                if (!Array.isArray(response.data)) {
                    console.error('Expected the projects API to return an array.', response.data);
                    return;
                }

                setNewMappedItems(response.data.map(mapProject));
            })
            .catch(error => {console.error(error)})
    }, [])

    return (
        <div style={{ height: '100vh', position: 'relative' }}>
            <InfiniteMenu
                items={newMappedItems}
                count={200}
                tileSize={0.55}
                roundness={0.2}
                zoom={1.6}
                pullBack={1}
                stretch={0.3}
                inertia={0.8}
                autoplay={1}
                grayscale
                dim={0}
                intro
                showInfo
                theme="dark"
                accentColor="#2bc20e"
            />
        </div>
    )
}

export default Projects