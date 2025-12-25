import React from 'react';
import MenuItem, { type MenuItemProps } from './MenuItem';
import './Menu.css';

interface MenuSubsection {
    title: string;
    items: MenuItemProps[];
}

const Menu: React.FC = () => {
    const menuData: MenuSubsection[] = [
        {
            title: 'Snacks',
            items: [
                {
                    title: 'Samosa',
                    description: 'Crispy pastry filled with spiced potatoes and peas',
                    price: 4.50,
                    status: 'available'
                },
                {
                    title: 'Pakora',
                    description: 'Deep-fried fritters with mixed vegetables',
                    price: 6.00,
                    status: 'available'
                },
                {
                    title: 'Paneer Tikka',
                    description: 'Grilled cottage cheese marinated in spices',
                    price: 12.00,
                    status: 'out-of-stock'
                },
            ]
        },
        {
            title: 'Mains',
            items: [
                {
                    title: 'Potato Curry',
                    description: 'Spicy potato curry in tomato sauce with traditional Indian spices and herbs',
                    price: 7.00,
                    status: 'available'
                },
                {
                    title: 'Dal Makhani',
                    description: 'Slow-cooked black lentils with butter and cream',
                    price: 9.50,
                    status: 'available'
                },
                {
                    title: 'Paneer Butter Masala',
                    description: 'Cottage cheese in creamy tomato gravy',
                    price: 12.00,
                    status: 'available'
                },
                {
                    title: 'Biryani Special',
                    description: 'Aromatic rice with marinated chicken and spices',
                    price: 8.75,
                    status: 'coming-soon',
                    availableDate: 'Jan 5, 2026'
                },
            ]
        },
        {
            title: 'Breads',
            items: [
                {
                    title: 'Butter Naan',
                    description: 'Soft leavened bread brushed with butter',
                    price: 2.25,
                    status: 'available'
                },
                {
                    title: 'Garlic Naan',
                    description: 'Naan topped with fresh garlic and coriander',
                    price: 2.75,
                    status: 'available'
                },
                {
                    title: 'Roti',
                    description: 'Traditional whole wheat flatbread',
                    price: 2.00,
                    status: 'available'
                },
            ]
        },
        {
            title: 'Desserts',
            items: [
                {
                    title: 'Gulab Jamun',
                    description: 'Soft milk dumplings in sweet syrup',
                    price: 6.00,
                    status: 'out-of-stock'
                },
                {
                    title: 'Ras Malai',
                    description: 'Soft paneer patties in sweet milk',
                    price: 5.50,
                    status: 'coming-soon',
                    availableDate: 'Dec 30, 2025'
                },
            ]
        }
    ];

    return (
        <section id="menu" className="menu-section">
            <div className="menu-container">
                <h2 className="section-title">My Menu</h2>
                {menuData.map((subsection, index) => (
                    <div key={index} className="menu-subsection">
                        <h3 className="subsection-title">{subsection.title}</h3>
                        <div className="menu-items-grid">
                            {subsection.items.map((item, itemIndex) => (
                                <MenuItem key={itemIndex} {...item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Menu;
