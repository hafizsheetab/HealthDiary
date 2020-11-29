import blog from '../../resources/imgaes/blog.svg'
import time from '../../resources/imgaes/calendar.svg'
import message from '../../resources/imgaes/chat.svg'
import docList from '../../resources/imgaes/doctorsList.svg'
import community from '../../resources/imgaes/groupChat.svg'
import meet from '../../resources/imgaes/med_doctors.svg'
import notification from '../../resources/imgaes/notification.svg'
import search from '../../resources/imgaes/people_search.svg'
import videoCon from '../../resources/imgaes/videoCall.svg'

// Section Content

export const doctorListInfo = {
    heading: "Find a doctor",
    paragraph: "Get help from top class doctors of reputated hostpitals and health organization according to your need",
    image:docList
}
export const videoChat = {
    heading: "Video chat with Doctor",
    paragraph: "Video conference and chat with doctors about all your health related issues any time you want",
    image:videoCon
}
export const getNotify = {
    heading: "Notification",
    paragraph: "Send you a notification for all your appointments,messages and other important events",
    image:notification
}
export const blogs = {
    heading: "A vast collection of blogs",
    paragraph:"Read blogs and articles on various health related topics written by doctors and certified health consultants",
    image:blog
}
export const communityForum = {
    heading: "A Friendly Community",
    paragraph: "Get answers of all your queries through our friendly and supportive community forum",
    image:community
}

// Tab Content

export const tab_content = [
    {
        heading: 'There is a list of doctors who are specialized in different health sectors working in top hospitals and health institution.You can easily find doctors as per your need.',
        image: search
    },
    {
        heading: 'You can sent message to the doctor with whom you want to fix an appointment or for any other query',
        image: message
    },
    {
        heading: 'You can fix an appointment with doctor.Time and date can be determine via communication.',
        image: time
    },
    {
        heading: 'At the day of your appointment a meeting link will be sent to you for a videochat with doctor.You can then discuss your problem with doctor',
        image: meet
    }

]