import { makeAuditTarget } from '../../../audit.js';
import { normalizeSyncParams, syncTargetId } from '../../sync/helpers.js';

import type { AuditTarget } from '@nangohq/types';

export function syncTargets(syncs: (string | { name: string; variant: string })[]): AuditTarget[] | undefined {
    const targets = normalizeSyncParams(syncs)
        .map(({ syncName, syncVariant }) => makeAuditTarget('sync', syncTargetId(syncName, syncVariant)))
        .filter((target): target is AuditTarget => Boolean(target));

    return targets.length > 0 ? targets : undefined;
}
