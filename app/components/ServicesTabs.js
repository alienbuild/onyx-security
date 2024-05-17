import {Card, CardBody, Tab, Tabs} from "@nextui-org/react";
import {useState} from "react";
import Container from "@/components/Container";
import IntruderAlarmsTab from "@/app/components/IntruderAlarmsTab";
import CctvSystemsTab from "@/app/components/CctvSystemsTab";
import AccessControlTab from "@/app/components/AccessControlTab";
import MaintenanceTab from "@/app/components/MaintenanceTab";

const ServicesTabs = () => {

    const [selected, setSelected] = useState("photos");

    const renderTab = () => {
        switch(selected){
            case 'intruder-alarm':
                return <IntruderAlarmsTab />
            case 'cctv-systems':
                return <CctvSystemsTab />
            case 'access-control':
                return <AccessControlTab />
            case 'maintenance':
                return <MaintenanceTab />
            default:
                return <IntruderAlarmsTab />
        }
    }

    return (
        <section>
            <div className="bg-black border-b-5 border-red-500 shadow">
                <Container>
                    <Tabs
                        aria-label="Services"
                        radius={"none"}
                        fullWidth
                        selectedKey={selected}
                        onSelectionChange={setSelected}
                        classNames={{
                            base: '',
                            tabList: 'bg-transparent p-0',
                            tab: 'py-10 text-xl bg-transparent',
                            tabContent: 'text-gray-300 font-medium onyx-heading group-data-[selected=true]:text-white',
                            cursor: 'bg-red-500',
                            panel: ''
                        }}
                    >
                        <Tab key="intruder-alarms" title="Intruder Alarms" />
                        <Tab key="cctv-systems" title="CCTV Systems" />
                        <Tab key="access-control" title="Access Control" />
                        <Tab key="maintenance" title="Maintenance" />
                    </Tabs>
                </Container>
            </div>
            <div className="py-24 sm:py-32 text-white" style={{ backgroundImage: 'url("/images/brick_wall.jpg")'}}>
                <Container>
                    {renderTab()}
                </Container>
            </div>
        </section>
    )
}

export default ServicesTabs