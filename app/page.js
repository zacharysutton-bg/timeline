'use client';

import { Calendar, Camera } from 'lucide-react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  const handleClick = () => {
    console.log('clicked');
    if (typeof window !== undefined && window.gtag) {
      console.log('ga available');
      window.gtag('event', 'button_click', {
        event_category: 'engagement',
        event_label: 'Tracked Button',
        value: 1,
      });
    }
  };

  return (
    <>
      <VerticalTimeline lineColor='lightgray' layout='2-columns'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='1825'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Calendar />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='1838'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Camera />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='2008 - 2010'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Camera />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='2006 - 2008'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Camera />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='April 2013'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Calendar />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='November 2012'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Calendar />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className='vertical-timeline-element--education'
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          date='2002 - 2006'
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          icon={<Calendar />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(255, 0, 0)', color: '#fff' }}
          contentStyle={{ background: 'lightgray', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  lightgray' }}
          icon={<Calendar />}
        >
          <h3 className='vertical-timeline-element-title text-4xl'>1825</h3>
          <p>
            German Carl Voelker sets up an outdoor gymnastic school near Regents Park London. Unfortunately, it does not survive beyond 1830, but the later
            formed Primrose Hill Gymnasium supported by the Ministry of Parks has better success.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
      <button onClick={() => handleClick()}>dkjngjksngkdnjgd</button>
    </>
  );
}
