import { Shift } from '../models/shiftModel';

class ShiftService {
    public async getShiftDetails(employeeId: string) {
        return await Shift.findAll({ where: { employeeId } });
    }
}

export { ShiftService };