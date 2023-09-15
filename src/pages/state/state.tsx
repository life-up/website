import { FC, useEffect, useState } from 'react';
import LinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';
import Content from '@/layout/Content';
import style from './state.module.less';
import { styled } from '@mui/material/styles';
import stamina from '@assets/images/stamina.png';
import wisdom from '@assets/images/wisdom.png';
import strength from '@assets/images/strength.png';

// UI: Life level progress bar
const BorderLinearProgressWithLabel = (props: LinearProgressProps & { label: string }) => {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 14,
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
      <div className="text-right mt-1 text-main-color">{props.label}</div>
    </div>
  );
};

// the gold info
const goldInfoBox = ({ acquisition, variation, hold }: Record<string, number>) => {
  return (
    <div className={`${style.stateBox}`}>
      <div className={`${style.stateBox_title}`}>金币</div>
      <div className="flex justify-between mt-2.5">
        <div className="text-center	">
          <div className="text-lg	text-orange-500">{acquisition}</div>
          <div className="text-sm">预计获得</div>
        </div>
        <div className="text-center	">
          <div className="text-lg	text-orange-500">{variation}</div>
          <div className="text-sm">今日变动</div>
        </div>
        <div className="text-center	">
          <div className="text-lg	text-orange-500">{hold}</div>
          <div className="text-sm">持有数量</div>
        </div>
      </div>
    </div>
  );
};
// UI:userLevelProgress
const LevelProgress = (props: LinearProgressProps & { cusColor?: string } = { cusColor: '#1a90ff' }) => {
  const LevelLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 8,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      backgroundColor: props.cusColor || '#1a90ff',
    },
  }));
  return (
    <div className="relative">
      <LevelLinearProgress {...props} />
      <span
        style={{ left: `${(props.value ?? 0) + 5}%`, color: props.cusColor }}
        className="text-right text-main-color absolute top-2/4	-translate-y-1/2"
      >
        {props.value}%
      </span>
    </div>
  );
};

const State: FC = () => {
  const [userAttributes, setUserAttributes] = useState<{ value: number; title: string; icon: unknown; color: string }[]>(
    []
  );
  useEffect(() => {
    // let data = ;
    setUserAttributes(() => {
      return [
        {
          title: '力量',
          icon: strength,
          color: '',
        },
        {
          title: '体力',
          icon: stamina,
          color: '',
        },
        {
          title: '智慧',
          icon: wisdom,
          color: '',
        },
      ].map((item) => {
        return { ...item, value: 10 };
      });
    });
  }, []);
  
  return (
    <Content>
      <div className={`${style.stateBox}`}>
        <div className={`${style.stateBox_title}`}>
          <span>人生等级</span>
          <span className="ml-2 text-main-color">LV6</span>
        </div>
        <BorderLinearProgressWithLabel className="mt-2.5" label="1000/20000" variant="determinate" value={20} />
      </div>
      {goldInfoBox({ acquisition: 100, variation: -100, hold: 3000 })}
      <div className={`${style.stateBox}`}>
        <div className={`${style.stateBox_title}`}>属性</div>

        <ul className="mt-2.5">
          {userAttributes.map((item) => {
            return (
              <li className="flex text-sm mt-2" key={item.title}>
                <img src={item.icon} className="w-8	h-8"></img>
                <span className="w-10 text-center ">力量</span>
                <div className="w-14 text-left">
                  <div className="text-main-color">LV2</div>
                  <div>1000/20</div>
                </div>
                <div className="flex-1">
                  <LevelProgress variant="determinate" value={item.value} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Content>
  );
};
export default State;
