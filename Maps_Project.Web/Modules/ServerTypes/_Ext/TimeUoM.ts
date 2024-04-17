﻿import { Decorators } from "@serenity-is/corelib";

export enum TimeUoM {
    Hour = 1,
    Day = 2,
    Week = 3,
    Month = 4,
    CalenderMonth = 5,
    Year = 6
}
Decorators.registerEnumType(TimeUoM, '_Ext.TimeUoM', 'TimeUoM');