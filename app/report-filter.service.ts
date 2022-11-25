import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ReportFilterService {
  statusListData: any[] = [
    { value: 'ongoing', status: 'In Progress' },
    { value: 'completed', status: 'Completed' },
  ];

  statusList = new BehaviorSubject([]);

  constructor() {}

  getStatus(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.statusListData);
      this.statusList.next(this.statusListData);
    });
  }

  setupPayload(data): any {
    const payload = {
      agencyId: 10,
      page: 0,
      pageSize: 6,
    };

    if (data.startDate && data.startDate.length > 0) {
      payload['startDate'] = data.startDate;
    }

    if (data.assistantId && data.assistantId.length > 0) {
      payload['assistantId'] = data.assistantId.map((assistant) => assistant);
    }
  }
}
