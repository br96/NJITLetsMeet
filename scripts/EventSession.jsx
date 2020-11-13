import * as React from 'react';
import ExpandedEvent from './ExpandedEvent';

export default function EventSession({
  // eslint-disable-next-line react/prop-types
  owner, title, type, location, time, description,
}) {
  const [toggle, setToggle] = React.useState(false);

  function toggleExpandedEvent() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  function toggleKeyDownExpandedEvent(e) {
    if (e.keyCode === 221) {
      if (toggle) {
        setToggle(false);
      } else {
        setToggle(true);
      }
    }
  }

  return (
    <div className="event-session-container">
      <div role="button" tabIndex={0} className="event-session" onClick={toggleExpandedEvent} onKeyDown={toggleKeyDownExpandedEvent}>
        <p className="owner">
          Owner:
          {owner}
        </p>
        <p className="title">
          Title:
          {title}
        </p>
      </div>
      {toggle ? (
        <ExpandedEvent
          type={type}
          location={location}
          time={time}
          description={description}
        />
      ) : null}
    </div>
  );
}
