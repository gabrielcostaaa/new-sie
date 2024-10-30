import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import ListEvents from './ListEvents';

const SelectStatusEvents = ({ events }) => {
  const [activeTab, setActiveTab] = useState("past");

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value)}
        className="w-full h-full"
      >
        <TabsList className="flex p-1 bg-gray-100 rounded-lg w-[1400px]">
          <TabsTrigger
            value="past"
            className={`flex-1 text-center rounded-lg transition-all duration-200 ${
              activeTab === "past" ? "bg-blue-500 text-white" : "text-gray-400"
            }`}
          >
            Eventos Encerrados
          </TabsTrigger>
          <TabsTrigger
            value="ongoing"
            className={`flex-1 text-center rounded-lg transition-all duration-200 ${
              activeTab === "ongoing" ? "text-black" : "text-gray-400"
            }`}
          >
            Eventos Em Andamento
          </TabsTrigger>
          <TabsTrigger
            value="future"
            className={`flex-1 text-center rounded-lg transition-all duration-200 ${
              activeTab === "future" ? "bg-primary text-white" : "text-gray-400"
            }`}
          >
            Eventos Futuros
          </TabsTrigger>
        </TabsList>

        <TabsContent value="past" className="p-4 h-full overflow-y-auto w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((evento) => (
              <ListEvents key={evento.event_id} events={evento} option="Evento Encerrado"/>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="ongoing" className="p-4 h-full overflow-y-auto w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((evento) => (
              <ListEvents key={evento.event_id} events={evento} option="Evento em Andamento"/>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="future" className="p-4 h-full overflow-y-auto w-[1400px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {events.map((evento) => (
              <ListEvents key={evento.event_id} events={evento} option="Evento Futuro"/>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SelectStatusEvents;

