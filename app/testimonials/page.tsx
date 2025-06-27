import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Imran B",
      course: "Flutter",
      rating: 5,
      testimonial: "Problem solving session is more enjoyable.",
      impact:
        " especially in terms of communication and problem-solving in dart programming.",
      recommend: "Yes",
    },
    {
      name: "Nirai",
      course: "Python",
      rating: 3,
      testimonial: "I just liked the coding gaming session it made to learn .",
      impact: "Object oriented programming and the app creation",
      recommend: "Yes",
    },
    {
      name: "Devesh.A",
      course: "Python",
      rating: 5,
      testimonial:
        "Interactive and tasks giving immediately after the topic you taught ",
      impact: "At projects which am doing now",
      recommend: "Yes",
    },
    {
      name: "Sahithya T.S ",
      course: "Python",
      rating: 4,
      testimonial:
        "When  we solved a lot of new problems and when we learned with the coding game",
      impact: "I applied  it to learn the next  programming  language ",
      recommend: "Yes",
    },
    {
      name: "Varadharaja perumal G ",
      course: "Python",
      rating: 5,
      testimonial:
        "The session was highly engaging and interactive, with exercises that were both enjoyable and thought-provoking.",
      impact: null,
      recommend: "Yes",
    },
    {
      name: "Madhan",
      course: "Python",
      rating: 5,
      testimonial: "Practical explanation ",
      impact: "Problem solving abilities ",
      recommend: "Yes",
    },
    {
      name: "kamesh",
      course: "Python",
      rating: 5,
      testimonial: "Extra Content ",
      impact: "In Knowledge",
      recommend: "Yes",
    },
    {
      name: "K.Kiyshor",
      course: "Python",
      rating: 5,
      testimonial:
        "Your were clear all the doubts regarding our python course and your classes were jovial.",
      impact:
        "When you clear the doubts and teaching classes in very jovial manner",
      recommend: "Yes",
    },
    {
      name: "Kamini. S",
      course: "Python",
      rating: 5,
      testimonial: "You give lots of example ",
      impact: "I got to learn about python and use it for leetcode",
      recommend: "Yes",
    },
    {
      name: "Mohanraj V",
      course: "Python",
      rating: 5,
      testimonial: "Friendly approach ",
      impact: null,
      recommend: "Yes",
    },
    {
      name: "Raj Kumar ",
      course: "Python",
      rating: 5,
      testimonial: "The way you explain each and everything. ",
      impact: null,
      recommend: "Yes",
    },
    {
      name: "Arun Jetli ",
      course: "Python",
      rating: 4,
      testimonial: "Very nice ",
      impact: "Skill ",
      recommend: "Yes",
    },
    {
      name: "Theva Sanjeiv ",
      course: "Python",
      rating: 3,
      testimonial: "Used good examples to help me understand ",
      impact: null,
      recommend: "Yes",
    },
    {
      name: "G. Gokulakrishnan",
      course: "Python",
      rating: 4,
      testimonial: "The way he explains",
      impact: "Not yet! ",
      recommend: "Yes",
    },
    {
      name: "N.Ganesh",
      course: "Flutter",
      rating: 5,
      testimonial: "Patience level and execution method",
      impact: "Gridview and Listview",
      recommend: "Yes",
    },
    {
      name: "Tharaniya",
      course: "Python",
      rating: 5,
      testimonial:
        "What I enjoyed most about your teaching style is how clearly you explained each concept step-by-step. You made complex topics feel simple and easy to understand how you kept the class interactive and patient. ",
      impact:
        "Yes Before this course, I struggled to understand how loops and functions work in Python. After your explanation and examples, I was able to write a program on my own that uses functions and conditionals to process user input.",
      recommend: "Yes",
    },
  ];

  return (
    <div className="w-full h-screen p-4 sm:p-8 md:p-16 md:pb-32 box-border overflow-hidden">
      <div className="flex flex-col md:flex-row w-full h-full gap-6">
        <div className="flex-1 aspect-square md:aspect-auto overflow-y-auto">
          <div className="h-full flex flex-col justify-start">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal mb-8">
              Testimonials
            </h1>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-normal mb-6">
              What my students liked about the sessions
            </h3>

            {/* Grid layout for paragraphs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-scroll">
              {testimonials.map(({ name, course, testimonial, rating }) => (
                <div key={name} className="p-6">
                  {/* Rating Stars */}
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={20}
                        className={
                          i < rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-zinc-300"
                        }
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-lg italic">&quot;{testimonial}&quot;</p>

                  {/* Author */}
                  <p className="text-md font-semibold text-right mt-4">
                    - {name}, {course} Course
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
