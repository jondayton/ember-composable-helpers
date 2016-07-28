import { A as emberArray } from 'ember-array/utils';
import get from 'ember-metal/get';
import { isEmberArray } from 'ember-array/utils';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

function _contains(needle, haystack) {
  return emberArray(haystack).contains(needle);
}

export function contains(needle, haystack) {
  if (!isEmberArray(haystack)) {
    return false;
  }

  if (isEmberArray(needle) && get(needle, 'length')) {
    return needle.reduce((acc, val) => acc && _contains(val, haystack), true);
  }

  return _contains(needle, haystack);
}

export default createNeedleHaystackHelper(contains);
