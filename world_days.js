specialDays =
{
    // January
    "Jan-01": ["New Year"],
    "Jan-10": ["World Laughter Day"],
    "Jan-12": ["National Youth Day"],
    "Jan-15": ["Army Day"],
    "Jan-23": ["Netaji Jayanti"],
    "Jan-25": ["Tourism Day"],
    "Jan-26": ["Republic Day"],
    "Jan-30": ["Martyr's Day"],
    // February
    "Feb-04": ["World Cancer Day"],
    "Feb-07": ["Rose Day"],
    "Feb-08": ["Propose Day"],
    "Feb-09": ["Chocolate Day"],
    "Feb-10": ["Teddy Day"],
    "Feb-11": ["Promise Day"],
    "Feb-12": ["Hug Day"],
    "Feb-13": ["Kiss Day"],
    "Feb-14": ["Valentine Day"],
    "Feb-15": ["Slap Day"],
    "Feb-28": ["National Science Day"],
    // March
    "Mar-03": ["National Defence Day"],
    "Mar-04": ["National Security Day"],
    "Mar-08": ["International Women's & Literacy Day"],
    "Mar-14": ["Pi Day"],
    "Mar-15": ["World Consumer Rights Day"],
    "Mar-16": ["National Vaccination Day"],
    "Mar-21": ["World Forestry Day"],
    "Mar-22": ["World Water Day"],
    "Mar-23": ["World Meteorological Day"],
    "Mar-24": ["World TB Day"],
    // April	
    "Apr-01": ["Fool's day"],
    "Apr-05": ["National Maritime Day"],
    "Apr-07": ["World Health Day"],
    "Apr-17": ["World Haemophilia Day"],
    "Apr-18": ["World Heritage Day"],
    "Apr-22": ["Earth Day"],
    "Apr-23": ["World Book & Copyright Day"],
    // May
    "May-01": ["May Day", "Labour Day"],
    "May-03": ["International Energy Day"],
    "May-04": ["International Firefighters' Day"],
    "May-08": ["World Red Cross Day"],
    "May-11": ["National Technology Day"],
    "May-12": ["International Nurses Day"],
    "May-15": ["International Day of Family"],
    "May-17": ["World Telecom Day"],
    "May-18": ["International Museum Day"],
    "May-19": ["World Hepatitis Day"],
    "May-21": ["World Anti-Terrorism Day"],
    "May-23": ["World Turtle Day"],
    "May-24": ["Commomwealth day"],
    "May-31": ["World Anti-Tobacco Day"],
    // June
    'Jun-01': ["International Children's Day"],
    "Jun-05": ["World Environment Day"],
    "Jun-08": ["World Brain Tumour Day", "World Ocean Day"],
    "Jun-10": ["Ballpoint Pen Day"],
    "Jun-12": ["World Day Against Child Labour"],
    "Jun-14": ["World Blood Donor Day"],
    "Jun-19": ["World Sickle Cell Day"],
    "Jun-20": ["World Refugee Day"],
    "Jun-21": ["World Music Day"],
    // July
    'Jul-01': ["Doctors' Day", "CA Day"],
    "Jul-07": ["International Cooperative Day"],
    "Jul-08": ["Writers' Day"],
    "Jul-11": ["World Population Day"],
    "Jul-26": ["Kargil Victory Day"],
    // August
    "Aug-06": ["Hiroshima day"],
    "Aug-09": ["Quit India Day", "Nagasaki Day"],
    "Aug-12": ["International Youth day"],
    "Aug-13": ["Left Hander Day"],
    "Aug-15": ["Independence Day"],
    "Aug-19": ["World Photography Day"],
    "Aug-20": ["Sadbhavna Divas"],
    "Aug-29": ["National Sports Day"],
    // September
    "Sep-04": ["World Hackers Day"],
    "Sep-05": ["Teachers' Day", "Sanskrit Day"],
    "Sep-08": ["World Literary Day"],
    "Sep-14": ["Hindi Day"],
    "Sep-15": ["Engineer's Day"],
    "Sep-16": ["World Ozone Day"],
    "Sep-23": ["World Heart Day"],
    "Sep-26": ["Deaf Day"],
    "Sep-27": ["World Tourism Day"],
    // October
    "Oct-02": ["Gandhi Jayanti", "International Non-Violence Day"],
    "Oct-03": ["World Habitat Day"],
    "Oct-04": ["World Animal Welfare Day"],
    "Oct-08": ["Indian Air Force Day"],
    "Oct-09": ["World Postal Day"],
    "Oct-10": ["National Postal Day", "World Mental Health Day"],
    "Oct-12": ["World Sight Day"],
    "Oct-15": ["Global Handwashing Day"],
    "Oct-16": ["World Food Day"],
    "Oct-17": ["International Poverty Eradication Day"],
    // November
    "Nov-14": ["Children's Day", "Diabetes Day"],
    "Nov-26": ["Law Day"],
    // December
    "Dec-01": ["World AIDS Day"],
    "Dec-04": ["Navy Day"],
    "Dec-07": ["Flag Day"],
    "Dec-10": ["Human Rights Day"],
    "Dec-11": ["UNICEF Day"],
    "Dec-14": ["National Energy Conservation Day"],
    "Dec-18": ["Minorities Rights Day"],
    "Dec-22": ["Mathematics Day"],
    "Dec-23": ["Farmers Day"],
    "Dec-25": ["Christmas"],
    "Dec-27": ["Being Human Day"],
    "Dec-28": ["Card Playing Day"]
};


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function dateKey(splDate) {
    var day = splDate.getDate();
    day = day < 10 ? '0' + day : day;
    return months[splDate.getMonth()] + '-' + day;
}