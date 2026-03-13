
const AdminDashboard = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1 style={{ color: '#2563eb' }}>Admin Dashboard</h1>
            <div style={{ background: '#f3f4f6', padding: '15px', borderRadius: '8px' }}>
                <h3>Welcome, {user?.name || 'Admin'}!</h3>
                <p><strong>Role:</strong> {user?.role}</p>
                <p><strong>Status:</strong> System Active</p>
            </div>
            <div style={{ marginTop: '20px' }}>
                <h4>Quick Statistics (Aggregation Results)</h4>
                <ul>
                    <li>Total Sales: $45,000</li>
                    <li>Top Category: Electronics</li>
                </ul>
            </div>
        </div>
    );
};

export default AdminDashboard;