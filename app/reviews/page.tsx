import { Star } from "lucide-react";

export default function Reviews() {
  const reviews = [
    {
      name: "Hemachandran V",
      app: "PTU CGPA Tracker",
      rating: 5,
      review:
        "I love this app as it's easy to use but I wish it would be convenient to add progressive cgpa also please. It is same as gpa but we need to do the same calculations for all subject from sem1 to current semester. Or Each semester [(gpa sem1*total credit of that sem) + (gpa sem2*total credit of sem2) +... ]/(total cerdit of sem1 + sem2 +...).",
    },
    {
      name: "Apoorv Pandey",
      app: "PTU CGPA Tracker",
      rating: 3,
      review: "Good app for cgpa calculation but lots of ads come!!",
    },
    {
      name: "A Google user",
      app: "Movie Style Fonts",
      rating: 5,
      review:
        "app is gr8.. however I'll b happy if the app is having an option to use the movie fonts on the personal photos. expecting vinnaithandi varuvaya font. pls do the needful",
    },
    {
      name: "Krishnaraj Patil",
      app: "Text Stickers - WAStickerApps",
      rating: 4,
      review:
        "Stickers are very nice but there must be variety & more Wishes & Greetings are must. Animated sticker should be there",
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
              What users liked about the apps I&apos;ve built and published
            </h3>

            {/* Grid layout for paragraphs */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 overflow-scroll">
              {reviews.map(({ name, app, review, rating }) => (
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
                  <p className="text-lg italic">&quot;{review}&quot;</p>

                  {/* Author */}
                  <p className="text-md font-semibold text-right mt-4">
                    - {name}, for {app} app
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
