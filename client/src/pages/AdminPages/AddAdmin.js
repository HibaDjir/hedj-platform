import React from 'react';
import AdminTab from './RecentAdmin';
import Sidebar from '../../components/Dash_components/shared/Sidebar';

function AddAdmin() {
  return (
    <div className="flex">
    
        <Sidebar />
    
      
        <AdminTab />
      
    </div>
  )
}

export default AddAdmin
