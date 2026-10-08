export interface Feedback {
  title: string
  description: string
  img: string
  name: string
  position: string
}

export interface FeedbackList {
  mobile: Feedback[]
  web: Feedback[]
  web3: Feedback[]
  ai: Feedback[]
}
