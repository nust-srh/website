import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';

import compassion from '../../assets/compassion.jpg';

const Calendar = () => {
  return (
    <div style={{ background: '#fafafa' }}>
      <Typography variant='h4' align='center' sx={{ color: '#050543', paddingTop: '20px' }}>
        Current Semester's Calendar
      </Typography>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '40px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <img
                src={compassion}
                style={{ height: '100px', width: '100px' }}
                alt='event chakadaro'
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h6" component="span">
              Open Day
            </Typography>
            <Typography variant='subtitle2'>11 Sept 2022</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '40px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <img
                src={compassion}
                style={{ height: '100px', width: '100px' }}
                alt='event chakadaro'
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h6" component="span">
              Outreach
            </Typography>
            <Typography variant='subtitle2'>11 Sept 2022</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '40px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <img
                src={compassion}
                style={{ height: '100px', width: '100px' }}
                alt='event chakadaro'
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h6" component="span">
              A good event
            </Typography>
            <Typography variant='subtitle2'>11 Sept 2022</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector sx={{ height: '40px' }} />
            <TimelineDot sx={{ color: '#f36a11' }} variant='outlined'>
              <img
                src={compassion}
                style={{ height: '100px', width: '100px' }}
                alt='event chakadaro'
              />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '60px', px: 2 }}>
            <Typography variant="h6" component="span">
              Good Event
            </Typography>
            <Typography variant='subtitle2'>11 Sept 2022</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default Calendar




