import React, { useEffect, useRef, useState } from "react";
// import Header from "../../components/header";
import {AiOutlineMore, AiOutlineSearch} from "react-icons/ai";
import { MdEmojiEmotions } from "react-icons/md";
import { IoDocumentText, IoSendSharp } from "react-icons/io5";
import { BsCheck2All, BsPaperclip } from "react-icons/bs";
import Sidebar from "../../components/Sidebar";

const Inbox: React.FC = () => {

  interface chats {
    number: string,
    message: string,
    time: string,
    totalmessages: number
  }
  const chatItems: chats[] = [

    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
    {
        number: '+91 8800688763',
        message: 'This is a message',
        time: '04:20 Pm',
        totalmessages: 5
    },
]

const [firstName, setFirstName] = useState<string>('Vivek');
const [lastName, setLastName] = useState<string>('Rana');
const [profileImageText, setProfileImageText] = useState<string>('');

const setProfileImage = () => {
        var initials = firstName.charAt(0) + lastName.charAt(0);
        setProfileImageText(initials);
}

const profileImageRef = useRef(null);

useEffect(()=>{
    setProfileImage()
},[])

// document.body.style.overflow = 'hidden'

  return (
    <div id="main" className="main">
      <Sidebar title='Inbox' />
      {/* <section className="auto-section-1">
        <div className="d-flex justify-content-between">
          <div className="align-items-center auto-section-1-sub-1"> */}
          <div className='parentChatBox w-100 overflow-hidden'>
            <div className='childChatBox h-100'>
                {chatItems.map((item, index) => {
                    return <div key={index} className={`d-flex flex-column align-items-center justify-content-center singleChatItem`}>
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <p className={`chatNum font-weight-bold`}>{item.number}</p>
                            <p className={`textSmall timeStampColor font-weight-bold`}>{item.time}</p>
                        </div>
                        <div className="d-flex align-items-center justify-content-between w-100">
                            <p className={`textSmall`}>{item.message}</p>
                            <p className={`textSmall text-white`} style={{backgroundColor: '#4CB050', padding: '1px 6px', borderRadius: '50%'}}>{item.totalmessages}</p>
                        </div>
                    </div>
                })}
            </div>
            <div className='overflow-hidden h-100 px-3 py-2 position-relative'>
                <div id='activeChatHeader' className={`bg-white p-3 activeChatHeader`}>
                    <div className="d-flex flex-column">
                        <div className="d-flex align-items-center justify-content-between">
                            <p className={`textMedium font-weight-bold`} >
                                Vivek Rana
                            </p>
                            <div>
                                <AiOutlineSearch className='mr-2 textLarge' />
                                <AiOutlineMore className="textLarge" />
                            </div>
                        </div>
                        <div>
                            <p className={`textMedium font-weight-bold`}>
                                +91 8800688763
                            </p>
                        </div>
                    </div>
                </div>
                <div className="activeChatBody d-flex flex-column align-items-center justify-content-end">
                    <div className="timeStamp">
                        <span className="text-dark bg-secondary"></span>
                        <span>Yesterday, 23rd June 2023</span>
                        <span className="text-dark bg-secondary"></span>
                    </div>
                    <div className="senderDetails w-100 d-flex flex-column align-items-start">
                        <p className="userName mx-1 my-2">Vivek Rana</p>
                        <div className="userMessage bg-white w-50 px-2 py-2 borderRadiusDefault">
                            <p style={{margin: 0}}>THis is a sample message that tells you how users send messages </p>
                            <p style={{margin: 0}} className="messaeTime d-flex align-items-center justify-content-end">
                                <span className="mx-1"><BsCheck2All /></span>
                                04:23 PM
                            </p>
                        </div>
                    </div>
                    <div className="receiverDetails my-4 w-100 d-flex flex-column align-items-end">
                    <p className="userName mx-1 my-2">CRM User</p>
                        <div className="userMessage bg-white w-50 px-2 py-2 borderRadiusDefault">
                            <p style={{margin: 0}}>Sample message from users end </p>
                            <p style={{margin: 0}} className="messaeTime d-flex align-items-center justify-content-end">
                                <span className="mx-1"><BsCheck2All /></span>
                                04:23 PM
                            </p>
                        </div>
                    </div>
                </div>
                <div className="activeChatReplyBox position-absolute">
                    <p className="px-1 py-2">Reply</p>
                    <div className="bg-white activeChatTypingBox position-relative">
                        <div className="w-25 d-flex align-items-center justify-content-end mx-2 my-2 position-absolute chatReplyIcons bottom-0 end-0">
                            <div className="d-flex align-items-center justify-content-center fs-5 rounded-circle p-2 mx-1" style={{backgroundColor: '#D9D9D980'}}>
                                <MdEmojiEmotions className="colorLite" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center fs-5 rounded-circle p-2 mx-1" style={{backgroundColor: '#D9D9D980'}}>
                               <IoDocumentText className="colorLite" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center fs-5 rounded-circle p-2 mx-1" style={{backgroundColor: '#D9D9D980'}}>
                                <BsPaperclip className="colorLite" />
                            </div>
                            <div className="d-flex align-items-center justify-content-center fs-5 rounded-circle p-2 mx-1" style={{backgroundColor: '#3FAEFDD1'}}>
                                <IoSendSharp className="text-white" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='childChatBox bg-white my-2 px-3 px-2 activeChatHeader'>
                <div className="d-flex align-items-center justify-content-start">
                    <div className="profileImage">{profileImageText}</div>
                    <p className="textLarge mx-2"><span className="firstName">{firstName}</span> <span className="lastName">{lastName}</span></p>
                </div>
                <div>
                    <div className="my-4">
                        <p>Message opt-in </p>
                        <p className="colorLite">Yes</p>
                    </div>
                    <div className="my-4">
                        <p>Phone</p>
                        <p className="colorLite">+91 8800 688763</p>
                    </div>
                    <div className="my-4">
                        <p>Email</p>
                        <p className="colorLite">Vivek@3isgmacrm.com</p>
                    </div>
                    <div className="my-4">
                        <p>Assigned to</p>
                        <p className="colorLite">Vivek Rana</p>
                    </div>
                </div>
            </div>
        </div>
          {/* </div>
        </div>
      </section> */}

      {/* <section className="auto-section-2"></section> */}
    </div>
  );
};

export default Inbox;
