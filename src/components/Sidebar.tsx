import {USERS} from '../db/test';
import { ScrollArea } from './ui/scroll-area';
interface SidebarProps {
  isCollapsed: boolean;
}
const Sidebar = ({isCollapsed}:SidebarProps) => {
  const selectedUser = USERS[0];
    return (
    <div className=" group relative flex flex-col h-full gap-4 p-2 data-[collapsed=true]:p-2 max-h-full overflow-auto bg-background">
      {!isCollapsed &&(
        <div className='flex justify-center p-2 items-center'>
          <div className='flex gap-2 items-center text-2xl'>
            <p className='font medium'>chats</p>

          </div>

        </div>
      )}
      <ScrollArea className='gap-2 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed-true]]:px-2'>
        {USERS.map((user,idx) => (
          <div key={idx} className='flex items-center gap-2 p-2 rounded-lg hover:bg-primary-foreground hover:bg-opacity-10'>
            <img src={user.image} alt={user.name} className='w-12 h-12 rounded-full' />
            <div className='flex flex-col'>
              <p className='font-medium'>{user.name}</p>
              <p className='text-muted-foreground'>{user.email}</p>
            </div>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}

export default Sidebar