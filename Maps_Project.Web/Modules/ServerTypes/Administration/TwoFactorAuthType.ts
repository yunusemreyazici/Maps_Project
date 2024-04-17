﻿import { Decorators } from "@serenity-is/corelib";

export enum TwoFactorAuthType {
    Email = 1,
    SMS = 2
}
Decorators.registerEnumType(TwoFactorAuthType, 'Maps_Project.Administration.TwoFactorAuthType');