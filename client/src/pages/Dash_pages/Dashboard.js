import React from 'react'
import DashboardStatsGrid from '../components/TableauDeBord'
import RecentOrders from '../components/RecentOrders'

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-4">
			<DashboardStatsGrid />
			whats that brohaa
			<div className="flex flex-row gap-4 w-full">
			</div>
			<div className="flex flex-row gap-4 w-full">
				<RecentOrders />
			
			</div>
		</div>
	)
}
