import React from 'react';
import BlockData from "../classes/blockdata";

type QueueProps = {
  queueData: Array<BlockData>,
}

class Queue extends React.Component<QueueProps, {}> {

  constructor(props: QueueProps) {
    super(props);

    // let queue: Array<Group> = Array(this.length);
    // for (let i = 0; i < this.length; i++) {
    //   queue[i] = new Group(Group.type_);
    // }
  }


}

export default Queue;