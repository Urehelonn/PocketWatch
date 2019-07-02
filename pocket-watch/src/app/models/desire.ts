import { Alarm } from './alarm';
import { Time } from '@angular/common';
import { Tag } from './tag';
import { Repeat } from './repeat';

export class Desire{
    id: number;
    name: string;
    description: string | null;
    worth: number;
    time: Time | null;
    date: Date | null;
    repeat: Repeat | null;
    alarm: Alarm | null;
    tag: Tag | null;
    
    constructor(id, name, description, worth, time, date, alarm, tag, repeat){
        this.id=id;
        this.name = name;
        this.description = description;
        this.worth = worth;
        this.time = time;
        this.date = date;
        this.alarm = alarm;
        this.tag = tag;
        this.repeat = repeat;
    }
}
  