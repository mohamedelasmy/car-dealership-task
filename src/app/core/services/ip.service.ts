export const API = (parm1: string = '') => {
    const IP = 'http://localhost:3000'

    const APis = {
        getListOfLeads: `${IP}/api/leads`,
        getLeadById: `${IP}/api/leads/${parm1}/potential-duplicates`,
        updateLead: `${IP}/api/leads/${parm1}`,
    };
    return APis;
};
