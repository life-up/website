import { FC } from 'react';
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';
import Content from '@/layout/Content';
import style from './state.module.less';
import { styled } from '@mui/material/styles';
import blood from '@assets/images/blood.png';
const BorderLinearProgressWithLabel = (props: LinearProgressProps & { label: string }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
    },
  }));
  return (
    <div>
      <BorderLinearProgress {...props} />
      <div>{props.label}</div>
    </div>
  );
};

// 金币
const goldInfoBox = ({ acquisition, variation, hold }: Record<string, number>) => {
  return (
    <div className={`${style.stateBox}`}>
      <div className={`${style.stateBox_title}`}>金币</div>
      <div className="flex justify-between mt-3.5">
        <div className="text-center	">
          <div>预计获得</div>
          <div>{acquisition}</div>
        </div>
        <div className="text-center	">
          <div>今日变动</div>
          <div>{variation}</div>
        </div>
        <div className="text-center	">
          <div>持有数量</div>
          <div>{hold}</div>
        </div>
      </div>
    </div>
  );
};

const State: FC = () => {
  return (
    <Content>
      <div className={`${style.stateBox}`}>
        <div className={`${style.stateBox_title}`}>
          <span>人生等级</span>
          <span>LV6</span>
        </div>
        <BorderLinearProgressWithLabel label="1000/20000" variant="determinate" value={20} />
      </div>
      {goldInfoBox({ acquisition: 100, variation: -100, hold: 3000 })}
      <div className={`${style.stateBox}`}>
        <div className={`${style.stateBox_title}`}>属性</div>
      
          <ul className='mt-3.5'>
            <li className="flex ">
              <img src={blood}></img>
              <span className='w-14'>力量</span>
              <div className="w-20">
                <div>lv2</div>
                <div>1000/20</div>
              </div>
              <div className="flex-1">
                <LinearProgress variant="determinate" value={10} />
              </div>
            </li>
            <li>123</li>
            <li>123</li>
          </ul>
        
      </div>
    </Content>
  );
};
export default State;
