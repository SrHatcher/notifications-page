const notificationsContainer = document.querySelector('.main__notifications')
const headerAmount = document.querySelector('.header__amount')
const headerButton = document.querySelector('.header__button')

function loadNotifications(){
    notificationsContainer.innerHTML = ''
    let newNotifications = 0
    data.forEach((value)=>{
        const notificationContainer = document.createElement('section');
        const notificationImage = document.createElement('div')
        const image = document.createElement('img')
        const notificationContent = document.createElement('div')
        const contentText = document.createElement('div')
        const textReason = document.createElement('p')
        const textName = document.createElement('strong')
        const nameLink = document.createElement('a')
        const textLink = document.createElement('a')
        const textStatus = document.createElement('span')
        const textDate = document.createElement('p')
        const contentImage = document.createElement('div')
        let relatedImage = ''
        const contentMessage = document.createElement('div')
        if(value.relatedImage){
            relatedImage = document.createElement('img')
            relatedImage.setAttribute('src', value.relatedImage)
            relatedImage.setAttribute('alt', "related image")
        }else{
            notificationContent.style.gridTemplateColumns = 'auto 0rem'
            notificationContent.style.columnGap = '0'
            contentImage.style.width = '0'
        }
        notificationContainer.classList.add('notification__container')
        notificationImage.classList.add('notification__image')
        image.setAttribute('src', value.profilePic)
        image.setAttribute('alt', "profile pic")
        notificationContent.classList.add('notification__content')
        contentText.classList.add('content__text')
        textReason.classList.add('text__reason')
        textName.classList.add('text__name')
        nameLink.setAttribute('href', "#")
        textLink.setAttribute('href', "#")
        
       
        textDate.classList.add('text__date')
        contentImage.classList.add('content__image')
        
        contentMessage.classList.add('content__message')

        notificationImage.append(image)

        nameLink.innerText=value.name
        textName.appendChild(nameLink)        
        textReason.append(textName)
        const reasonText = document.createTextNode(` ${value.reason} `)
        textReason.append(reasonText)
        textLink.innerText = value.link
        textReason.append(textLink)
        if(value.newState){
            textLink.classList.add('text__link')
            textStatus.classList.add('text__status')
            textReason.append(textStatus)
            newNotifications++;
        }else{
            textLink.classList.add('text__link--old')
            notificationContainer.classList.add('notification__container--old')
        }
        textDate.innerHTML = value.date
        textReason.append(textDate)
        contentText.append(textReason)

        contentImage.append(relatedImage)

        let message = false
        if(value.message){
            message = document.createTextNode(value.message)
            contentMessage.append(message)
        }

        if(message){
            notificationContent.append(contentText, contentImage,  contentMessage )
        }else{
            notificationContent.append(contentText, contentImage)
            notificationContent.style.rowGap = '0'
        }
        notificationContainer.append(notificationImage, notificationContent)
        notificationsContainer.append(notificationContainer)
        
    })

    headerAmount.innerText = newNotifications
}

function setNotificationsState() {
    const newData = data.map(value=>{
        value.newState = false
        const data = {...value}
        return data
    })
    
    loadNotifications()
}

window.addEventListener('load', loadNotifications)
