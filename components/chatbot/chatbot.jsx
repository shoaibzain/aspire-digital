"use client"

import { useState, useEffect, useRef } from "react"
import { Send, MessageCircle, X, Sparkles } from "lucide-react"

const Button = ({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  disabled = false,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground",
  }

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md",
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

const Input = ({ className = "", ...props }) => {
  return (
    <input
      className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  )
}

const Card = ({ children, className = "", onClick, ...props }) => {
  return (
    <div
      className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  )
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [currentInput, setCurrentInput] = useState("")
  const [currentStep, setCurrentStep] = useState(1)
  const [userName, setUserName] = useState("")
  const [userPhone, setUserPhone] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const info = {
    chatbot: "Nova",
    name: "Aspire Digital",
    logo: "https://aspiredigital.pk/wp-content/uploads/2024/02/aspire-Logo-white.svg",
    website: "https://aspiredigital.pk/",
    email: "info@aspiredigital.pk",
    phone: "923273630329",
    whatsapp: "923273630329",
    whatsappUrl: "https://api.whatsapp.com/send/?phone=923273630329&text&type=phone_number&app_absent=0",
    address: "Office 208, Second Floor, Block B, Anum Classic, Shahrah Faisal, Karachi",
    directions: "https://maps.app.goo.gl/U8htrHTSnLSvz3Hq6",
  }

  const isValidNumber = (input) => {
    return /^\d+$/.test(input)
  }

  const isValidURL = (url) => {
    const urlPattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-zA-Z0-9\\-]+)\\.)+[a-zA-Z]{2,}|" +
        "localhost|" +
        "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|" +
        "\\[?[a-fA-F0-9]*:[a-fA-F0-9:]+\\]?)" +
        "(\\:\\d+)?(\\/[-a-zA-Z0-9%_\\+.~#]*)*" +
        "(\\?[;&a-zA-Z0-9%_\\+.~#=-]*)?" +
        "(#[-a-zA-Z0-9_]*)?$",
      "i",
    )
    return urlPattern.test(url)
  }

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    return emailPattern.test(email)
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = `Welcome to ${info.name}, My Name is ${info.chatbot} and I will be assisting you today. May I know who I am chatting with to address you properly?`
      setMessages([{ type: "bot", text: welcomeMessage, timestamp: new Date() }])
    }
  }, [isOpen])

  const addMessage = (type, text) => {
    setMessages((prev) => [...prev, { type, text, timestamp: new Date() }])
  }

  const handleBotResponse = (step, userInput) => {
    switch (step) {
      case 1: // Name input
        setUserName(userInput)
        setCurrentStep(2)
        return `Nice to meet you <strong>${userInput}</strong>, hope all is well at your end. Please enter your phone number so we know how to reach you.`

      case 2: // Phone input
        if (isValidNumber(userInput)) {
          setUserPhone(userInput)
          setCurrentStep(3)
          return `Thank you <strong>${userName}</strong>, is there anything you'd like to know?`
        } else {
          return `Oops! it seems you entered a wrong phone number, I need a valid phone number so I can reach you.`
        }

      case 3: // Main menu
        if (userInput === "Our Services") {
          setCurrentStep(4)
          return `Well, lots of ways! That depends on what kind of help you need 😉<br><br>We help businesses with growth, lead generation, branding & online design.<br><br>Would you like to see how we do it?`
        } else if (userInput === "About Us") {
          setCurrentStep(3)
          return `We are everything you'd expect from a digital agency: accountable, flexible and personable.<br><br>We're a "People First" agency. We build results-oriented business strategies and refine campaigns for the greatest outcome.<br><br>📍 We are located at Office 208, Second Floor, Block B, Anum Classic, Shahrah Faisal, Karachi.`
        } else if (userInput === "Contact Us") {
          setCurrentStep(3)
          return `We are here to help. How would you like to reach us?`
        } else if (userInput === "Chat with WhatsApp") {
          window.open(info.whatsappUrl, "_blank")
          setCurrentStep(3)
          return `Great! We would be happy to show you how we can help you, <strong>${userName}</strong>.`
        } else if (userInput === "Directions") {
          window.open(info.directions, "_blank")
          setCurrentStep(3)
          return `Opening directions to our office...`
        } else if (userInput === "Call us") {
          window.open(`tel:${info.phone}`, "_blank")
          setCurrentStep(3)
          return `Calling ${info.phone}...`
        } else {
          return `Please choose a valid option.`
        }

      case 4: // Services interest
        if (userInput === "Yes 👍") {
          setCurrentStep(5)
          return `Great! We've got a couple of different ways we can help you, <strong>${userName}</strong>.<br><br>Please choose what you're more inclined toward:`
        } else if (userInput === "Back to Main Menu 👉") {
          setCurrentStep(3)
          return `Thank you <strong>${userName}</strong>, is there anything you'd like to know?`
        } else {
          return `Please choose a valid option.`
        }

      case 5: // Service selection
        if (userInput === "Social Media Marketing") {
          setCurrentStep(6)
          return `Great! Will help you to step up your social media marketing game!<br><br>Our Social Media Marketing Services help your business grow brand awareness, relationships, and website traffic.<br><br>Would you like to see our social media marketing process step by step?`
        } else if (userInput === "Advertising") {
          setCurrentStep(6)
          return `Great! We'll help you connect your products & services to thousands of interested people.<br><br>Would you like to see our advertising process step by step?`
        } else if (userInput === "Website Design & Development") {
          setCurrentStep(6)
          return `Awesome! You need a website that represents your company well AND grows your business.<br><br>Get a stunning & powerful website — corporate, e-commerce & more.<br><br>We GUARANTEE you 100% satisfaction!`
        } else if (userInput === "Branding") {
          setCurrentStep(8)
          return `Develop a unique brand identity for your business.<br><br>Would you like to discuss this with our team?`
        } else if (userInput === "Search Engine Optimization") {
          setCurrentStep(8)
          return `Let's rank up your business website in Google!`
        } else if (userInput === "Mobile Application Development") {
          setCurrentStep(6)
          return `Are you looking to get a custom mobile application developed?`
        } else {
          return `Please choose a valid option.`
        }

      case 6: // Process/Learn More
        if (userInput === "Check Our Process 👍") {
          setCurrentStep(7)
          return `Our Social Media Marketing Process:<br><br>1️⃣ Dedicated social media manager assigned<br>2️⃣ Strategy developed specific to your business<br>3️⃣ Ongoing social content calendar created<br>4️⃣ Monthly performance report shared<br><br>Would you like a FREE 🎁 SMM audit for your business today?`
        } else if (userInput === "Learn More 👉") {
          setCurrentStep(7)
          return `We will deliver:<br><br>✅ Advanced Functionality<br>✅ Content Writing Services<br>✅ Custom Web Design<br>✅ SEO-Optimized<br>✅ A Website That Drives Leads<br>✅ Mobile Friendly<br>✅ Clear Communication of Your Brand<br>✅ Strong Calls to Action<br><br>Would you like to talk more about your website in a quick call?`
        } else if (userInput === "Yes 👉") {
          setCurrentStep(7)
          return `Take your mobile app idea to the next level, on time & within budget.<br><br>Request a call with our developer to help you with your custom mobile app.`
        } else {
          return `Please choose a valid option.`
        }

      case 7: // Free audit/Call request
        if (userInput === "Yes sign me up 🎉" || userInput === "📞 Request a Call") {
          setCurrentStep(8)
          return `Enter your company name.`
        } else if (userInput === "Main Menu 👉") {
          setCurrentStep(3)
          return `Thank you <strong>${userName}</strong>, is there anything you'd like to know?`
        } else {
          return `Please choose a valid option.`
        }

      case 8: // Company name
        if (userInput.trim()) {
          setCompanyName(userInput)
          setCurrentStep(9)
          return `Please enter your website.`
        } else {
          return `Please enter your company name.`
        }

      case 9: // Website
        if (
          isValidURL(userInput) ||
          userInput.toLowerCase().includes("no website") ||
          userInput.toLowerCase().includes("none")
        ) {
          setCurrentStep(10)
          return `Enter your social media accounts.`
        } else {
          return `Please enter a valid website URL or type "No website" if you don't have one.`
        }

      case 10: // Social media
        setCurrentStep(11)
        return `Enter the best phone number to reach you.`

      case 11: // Phone for lead
        if (isValidNumber(userInput)) {
          setCurrentStep(12)
          return `Enter the best email to reach you.`
        } else {
          return `Please enter a valid phone number.`
        }

      case 12: // Email
        if (isValidEmail(userInput)) {
          setCurrentStep(3)
          return `✅ Our team will reach out to you as soon as possible, <strong>${userName}</strong>!`
        } else {
          return `Please enter a valid email address.`
        }

      default:
        return `Thank you for your interest! Our team will reach out to you soon.`
    }
  }

  const handleQuickReply = (response) => {
    sendMessage(response)
  }

  const sendMessage = async (message) => {
    if (!message.trim()) return

    addMessage("user", message)
    setCurrentInput("")
    setIsLoading(true)

    // Simulate API delay
    setTimeout(() => {
      const botResponse = handleBotResponse(currentStep, message)
      addMessage("bot", botResponse)
      setIsLoading(false)
    }, 1000)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendMessage(currentInput)
  }

  const ServiceCard = ({ title, subtitle, action }) => (
    <Card
      className="p-4 min-w-[280px] cursor-pointer bg-gradient-to-br from-card to-muted border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fade-in-scale"
      onClick={() => handleQuickReply(action)}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-semibold text-sm text-card-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <Sparkles className="w-4 h-4 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
      <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{subtitle}</p>
      <Button
        size="sm"
        variant="outline"
        className="w-full bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200"
      >
        Learn More →
      </Button>
    </Card>
  )

  const QuickReplyButton = ({ text, action }) => (
    <Button
      variant="outline"
      size="sm"
      onClick={() => handleQuickReply(action)}
      className="mr-2 mb-2 bg-gradient-to-r from-secondary to-muted border-border hover:border-primary/40 hover:bg-primary/5 hover:text-primary transition-all duration-200 animate-fade-in-scale"
    >
      {text}
    </Button>
  )

  const renderMessageContent = (message) => {
    if (message.type === "user") {
      return <span>{message.text}</span>
    }

    // Handle bot messages with interactive elements
    if (currentStep === 3 && message.text.includes("anything you'd like to know")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Our Services" action="Our Services" />
            <QuickReplyButton text="About Us" action="About Us" />
            <QuickReplyButton text="Contact Us" action="Contact Us" />
            <QuickReplyButton text="Chat with WhatsApp" action="Chat with WhatsApp" />
          </div>
        </div>
      )
    }

    if (currentStep === 3 && message.text.includes("located at Office")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Directions" action="Directions" />
            <QuickReplyButton text="Call us" action="Call us" />
            <QuickReplyButton text="Chat with WhatsApp" action="Chat with WhatsApp" />
            <QuickReplyButton text="Main Menu 👉" action="Our Services" />
          </div>
        </div>
      )
    }

    if (currentStep === 3 && message.text.includes("How would you like to reach us")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Call us" action="Call us" />
            <QuickReplyButton text="Chat with WhatsApp" action="Chat with WhatsApp" />
            <QuickReplyButton text="Main Menu 👉" action="Our Services" />
          </div>
        </div>
      )
    }

    if (currentStep === 4 && message.text.includes("how we do it")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Yes 👍" action="Yes 👍" />
            <QuickReplyButton text="Back to Main Menu 👉" action="Back to Main Menu 👉" />
          </div>
        </div>
      )
    }

    if (currentStep === 5 && message.text.includes("more inclined toward")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 overflow-x-auto">
            <div className="flex space-x-4 pb-2">
              <ServiceCard
                title="Social Media Marketing"
                subtitle="Want to get into social media, but don't know how? Here is how.."
                action="Social Media Marketing"
              />
              <ServiceCard
                title="Advertising"
                subtitle="We connect your products services to thousands of people who may be interested"
                action="Advertising"
              />
              <ServiceCard
                title="Website Design & Development"
                subtitle="Crafting a creative, optimized web presence that achieves your goals."
                action="Website Design & Development"
              />
              <ServiceCard
                title="Branding"
                subtitle="Create eye-catchy business Logo, Company Profile, Flyers, Brochures, etc."
                action="Branding"
              />
              <ServiceCard
                title="Search Engine Optimization"
                subtitle="Do you know where your company ranks in Google?"
                action="Search Engine Optimization"
              />
              <ServiceCard
                title="Mobile Application Development"
                subtitle="Take Your Mobile App Idea to the Next Level. On Time & Within Budget."
                action="Mobile Application Development"
              />
            </div>
          </div>
        </div>
      )
    }

    if (currentStep === 6 && message.text.includes("step by step")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Check Our Process 👍" action="Check Our Process 👍" />
          </div>
        </div>
      )
    }

    if (currentStep === 6 && message.text.includes("GUARANTEE you 100% satisfaction")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Learn More 👉" action="Learn More 👉" />
          </div>
        </div>
      )
    }

    if (currentStep === 6 && message.text.includes("custom mobile application")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Yes 👉" action="Yes 👉" />
          </div>
        </div>
      )
    }

    if (
      currentStep === 8 &&
      (message.text.includes("discuss this with our team") || message.text.includes("rank up your business"))
    ) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="📞 Request a Call" action="📞 Request a Call" />
          </div>
        </div>
      )
    }

    if (currentStep === 7 && message.text.includes("FREE 🎁 SMM audit")) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="Yes sign me up 🎉" action="Yes sign me up 🎉" />
            <QuickReplyButton text="Main Menu 👉" action="Main Menu 👉" />
          </div>
        </div>
      )
    }

    if (currentStep === 7 && (message.text.includes("quick call") || message.text.includes("custom mobile app"))) {
      return (
        <div>
          <div dangerouslySetInnerHTML={{ __html: message.text }} />
          <div className="mt-4 space-y-2">
            <QuickReplyButton text="📞 Request a Call" action="📞 Request a Call" />
          </div>
        </div>
      )
    }

    return <div dangerouslySetInnerHTML={{ __html: message.text }} />
  }

  return (
    <div className="fixed bottom-4 left-4 z-50">
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-16 h-16 bg-gradient-to-br from-primary to-accent hover:from-primary/90 hover:to-accent/90 shadow-xl hover:shadow-2xl transition-all duration-300 animate-pulse-glow group"
        >
          <MessageCircle className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
        </Button>
      )}

      {isOpen && (
        <Card className="w-96 h-[550px] flex flex-col shadow-2xl border-border/50 animate-slide-in-up overflow-hidden">
          <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary via-primary to-accent text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 backdrop-blur-sm"></div>
            <div className="flex items-center space-x-3 relative z-10">
              <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <img src={info.logo || "/placeholder.svg"} alt={info.name} className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{info.name}</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20 backdrop-blur-sm relative z-10 transition-all duration-200"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-background to-muted/30">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} animate-slide-in-up`}
              >
                <div
                  className={`max-w-[85%] p-3 rounded-2xl shadow-sm ${
                    message.type === "user"
                      ? "bg-gradient-to-br from-primary to-accent text-primary-foreground"
                      : "bg-card border border-border/50 text-card-foreground backdrop-blur-sm"
                  }`}
                >
                  {renderMessageContent(message)}
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start animate-slide-in-up">
                <div className="bg-card border border-border/50 p-4 rounded-2xl shadow-sm backdrop-blur-sm">
                  <div className="flex space-x-2 items-center">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.1s" }}
                      ></div>
                      <div
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">Nova is typing...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-border/50 bg-card/50 backdrop-blur-sm">
            <div className="flex space-x-3">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-input border-border/50 focus:border-primary/50 focus:ring-primary/20 rounded-xl transition-all duration-200"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !currentInput.trim()}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 rounded-xl px-4 transition-all duration-200 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </div>
  )
}

export default Chatbot
