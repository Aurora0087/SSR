import React from 'react';
import { Link } from 'react-router-dom'

const TopicList: React.FC = () => {
    const topics: string[] = ['Animation', 'Cooking', 'Animation', 'Cooking', 'Animation', 'Cooking', 'Animation', 'Cooking'];

    return (
            <ul>
                {topics.map((topic, index) => (
                    <li key={index}>
                        <Link to={"/topic/"+topic}>{topic}</Link>
                    </li>
                ))}
            </ul>
    );
};

export default TopicList
