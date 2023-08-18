# Lil Messenger Clone

A full-stack, real-time Messenger clone. Uses Next, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher, and more. Responsive for desktop, tablet, and mobile views. Hosted [here](https://lil-messenger-clone.vercel.app/) on Vercel.

## Main Features
- Real-time messaging using Pusher
- Message notifications and read-receipts
- One-on-one and group chat functionality
- Create, manage, and delete conversations
- Active/offline user status
- Custom display names and avatars (Cloudinary)
- Image attachments (Cloudinary)
- Server error handling (Hot Toast)
- Authentation with NextAuth - log in with email, Github, or Google
- Data persisted through MongoDB database using Prisma

## Showcase
** NOTE: Some colour/contrast issues with the .gif recordings. Sorry! Take a look at the live site for the best experience.
### New user registration
!["New User"](/projects/messenger/lmc_new.gif)

### Unread messages, read receipts
!["Unread messages, read receipts"](/projects/messenger/lmc_receipts.gif)

### Profile customization
!["Change display picture"](/projects/messenger/lmc_custom.gif)

### Group chats
!["Group chat creation"](/projects/messenger/lmc_new.gif)

### Image attachments
!["Attachments"](/projects/messenger/lmc_attach.gif)

### Live updates
!["Live updates"](/projects/messenger/lmc_live.gif)

### Active status
!["Active status change"](/projects/messenger/lmc_status.gif)

## Packages
- `axios`
- `bcrypt`
- `clsx`
- `lodash`
- `next-auth`
- `next-cloudinary`
- `pusher`
- `react-hot-toast`
- `react-icons`