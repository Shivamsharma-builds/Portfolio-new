import { FiUser, FiAward, FiBookOpen, FiBriefcase } from 'react-icons/fi'
import profile2 from '../assets/images/profile2.png'

const About = () => {
  const stats = [
    { icon: FiBookOpen, label: 'Years of Study', value: '4+' },
    { icon: FiBriefcase, label: 'Projects Done', value: '15+' },
    { icon: FiAward, label: 'Certificates', value: '10+' },
    { icon: FiUser, label: 'Happy Clients', value: '5+' },
  ]

  return (
    <section id="about" className="py-20 px-6 section-fade gsap-section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-cyan-600 rounded-3xl blur-2xl opacity-20"></div>
            <div className="relative glass rounded-3xl overflow-hidden p-2">
              <img 
                src={profile2}
                alt="About Me"
                className="rounded-2xl w-full"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-purple-400">
              Final Year Computer Science Student
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I'm a passionate computer science student with a strong foundation in software 
              engineering, algorithms, and modern web technologies. Throughout my academic journey, 
              I've developed a keen interest in building scalable web applications and exploring 
              the intersections of AI and web development.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              I thrive in collaborative environments and enjoy tackling complex problems with 
              innovative solutions. My goal is to leverage my skills to create meaningful impact 
              through technology.
            </p>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="glass rounded-xl p-4">
                <p className="text-gray-500 text-sm">Name</p>
                <p className="text-white font-semibold">Shivam Sharma</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-gray-500 text-sm">Email</p>
                <p className="text-white font-semibold text-sm">shivam1234sharmabro@gmail.com</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-gray-500 text-sm">Location</p>
                <p className="text-white font-semibold">Jamtara, Jharkhand (India)</p>
              </div>
              <div className="glass rounded-xl p-4">
                <p className="text-gray-500 text-sm">Availability</p>
                <p className="text-green-400 font-semibold">Open to Work</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="glass rounded-xl p-4 text-center card-hover">
                  <stat.icon className="text-2xl text-purple-400 mx-auto mb-2" />
                  <h4 className="text-2xl font-bold gradient-text">{stat.value}</h4>
                  <p className="text-gray-500 text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About