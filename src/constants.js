export default {
    UserTypeLandlord: 'landlord',
    UserTypeTenant: 'tenant',
    Email: 'email',
    Phone: 'phone',
    Google: 'google',
    Facebook: 'facebook',


    Labels: {
        Landlord: 'Landlord',
        Tenant: 'Tenant',
        Yes: 'Yes',
        No: 'No'
    },

    RentFrequency:{
        PerWeek: 'PER WEEK',
        PerMonth: 'PER MONTH',
    },

    BillTypes:{
        Electricity: 'Electricity',
        Gas: 'Gas',
        Water: 'Water',
        Internet: 'Internet',
        TVLicense: 'TV License',
        Other: 'Other'
    },

    PropertyType:{
        Studio: 'Studio',
        Flat: 'Flat',
        DetachedHouse: 'Detached house',
        SemiDetachedHouse: 'Semi detached',
        TerracedHouse: 'Terraced house',
        Other: 'Other'
    },

    FurnishingType:{
        Furnished: 'Furnished',
        PartFurnished: 'Part furnished',
        Unfurnished: 'Unfurnished'
    },

    RoomType:{
        Bedroom: 'Bedroom',
        Bathroom: 'Bathroom',
        Livingroom: 'Living Room',
    },

    RoomAttributes:{
        Bedroom:{
            Single: 'Single',
            Double: 'Double',
            Ensuite: 'Ensuite',
        },
        Bathroom: {
            Shower: 'Shower',
            Bath: 'Bath',
        },
        Livingroom: {
            OpenPlanKitchen: 'Open plan kitchen',
        },
    },

    ScreenNames: {
        MyProperty: 'My Properties',
        Maintenance : 'Maintenance',
        MarketPlace : 'MarketPlace',
        AddProperty: 'Add Property'
    },


    Errors: [
        {
            errorCode:"auth/email-already-in-use",
            errorMsg: 'Email already registered'
        },
        {
            errorCode:"auth/email-already-exists",
            errorMsg: 'Email already registered'
        }
    ],
    Maintenance:{
        RaiseIssue : 'Raise Issue',
        EmergencyIssue : 'Emergency Issue',
        Electricians: 'Electricians',
        Plumbers: 'Plumbers',
        ApplianceRepair: 'Appliance Repair',
        Painters: 'Painters & Decorators',
        Carpenters: 'Carpenters',
        Gardening: 'Gardening'
    },

}