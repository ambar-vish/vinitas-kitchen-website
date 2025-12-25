import React from 'react';
import './MenuItem.css';

export interface MenuItemProps {
    title: string;
    description: string;
    price: number;
    image?: string;
    status?: 'available' | 'out-of-stock' | 'coming-soon';
    availableDate?: string; // For coming soon items
}

const MenuItem: React.FC<MenuItemProps> = ({
    title,
    description,
    price,
    image,
    status = 'available',
    availableDate
}) => {
    return (
        <div className={`menu-item ${status !== 'available' ? status : ''}`}>
            {image && (
                <div className="menu-item-image">
                    <img src={image} alt={title} />
                </div>
            )}
            <div className="menu-item-content">
                <div className="menu-item-header">
                    <h4 className="menu-item-title">{title}</h4>
                    <span className="menu-item-price">₹{price.toFixed(2)}</span>
                </div>
                <p className="menu-item-description">{description}</p>
                {status === 'out-of-stock' && (
                    <span className="status-badge out-of-stock">Out of Stock</span>
                )}
                {status === 'coming-soon' && (
                    <span className="status-badge coming-soon">
                        Coming Soon{availableDate ? ` - ${availableDate}` : ''}
                    </span>
                )}
            </div>
        </div>
    );
};

export default MenuItem;
