import React, { FC } from 'react'
import { useGlobal } from '../Context';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Download, HardDrive } from 'lucide-react'


const Resume: FC = () => {
  const { openResume, setOpenResume } = useGlobal()
  
  return (
    <Dialog open={openResume} onOpenChange={setOpenResume}>
      <DialogContent className='w-[300px] h-fit flex flex-col items-center justify-center gap-2 m-4'>
        <DialogHeader>
          <DialogTitle asChild>
            <h4 className='!text-xs text-center'>
                 download my cv
                </h4>
                </DialogTitle>
        </DialogHeader>
        <div>
          <a href='https://drive.google.com/file/d/1IcidbSYAi7caIgGmUtKuL-1iuX29nhdw/view?usp=drivesdk' target='_blank' rel='noopener noreferrer'>
            <button className='resume-btn'>
              Open in Drive
             
             <HardDrive  className='ml-2 inline' size={18} />
            </button>
          </a>
          <a href='/Joel_Kada.pdf' download>
            <button className='resume-btn'>
              Download CV
              <Download className='ml-2 inline' size={18} />
            </button>
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}


export default Resume
