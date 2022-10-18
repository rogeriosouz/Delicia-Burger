import { AllAddressType } from '../types/query';

export function editTextAddress(data: AllAddressType) {
  return `${data.number} - ${data.city} - ${data.state}...`;
}
