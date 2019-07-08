import { Desire } from './desire';
import { DesireService } from '../service/desire-service.service';

export class DesireRecord{
    desire: Desire[];
    constructor(private desireService: DesireService){};
}