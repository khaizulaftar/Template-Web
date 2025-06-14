export default function Stack() {

    const datas = [
        {
            "title": "Design and Prototyping Tools",
            "data": [
                {
                    "img": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-framer-the-only-tool-you-need-to-create-interactive-designs-for-any-platform-logo-color-tal-revivo.png",
                    "text": "Framer",
                    "des": "I use Framer when I need to create high-fidelity prototypes with advanced animations and micro-interactions to test user behavior and refine designs."
                },
                {
                    "img": "https://img.icons8.com/color/48/figma--v1.png",
                    "text": "Figma",
                    "des": "I use Figma for creating wireframes, prototypes, and high-fidelity UI designs. Its real-time collaboration features make it perfect for working closely with teams and getting instant feedback."
                },
                {
                    "img": "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-sketch-a-vector-design-toolkit-graphics-editor-logo-shadow-tal-revivo.png",
                    "text": "Sketch",
                    "des": "Sketch is my go-to tool for crafting scalable vector designs and maintaining reusable components, which makes managing design systems much easier."
                },
                {
                    "img": "https://img.icons8.com/color-glass/50/adobe-photoshop.png",
                    "text": "Photoshop",
                    "des": "Photoshop is essential for me when editing images or creating detailed visual assets like icons or banners that enhance the user interface."
                },
                {
                    "img": "https://img.icons8.com/color/48/adobe-xd--v1.png",
                    "text": "Adobe XD",
                    "des": "I rely on Adobe XD for designing and prototyping user experiences, especially when I need to create interactive elements and transitions to visualize the flow of the user journey."
                },
                {
                    "img": "https://img.icons8.com/color/48/adobe-illustrator.png",
                    "text": "Illustrator",
                    "des": "I turn to Illustrator for designing vector-based UI elements like logos and custom illustrations that need to be crisp and scalable."
                },
                {
                    "img": "https://img.icons8.com/fluency/48/canva.png",
                    "text": "canva",
                    "des": "When I need to quickly create simple assets like presentation slides or concept sketches for brainstorming sessions, Canva helps me work efficiently."
                }
            ]
        },
        {
            "title": "Development and Implementation Tools",
            "data": [
                {
                    "img": "https://img.icons8.com/color/48/html-5--v1.png",
                    "text": "HTML",
                    "des": "I use HTML5 to structure content when prototyping or testing designs in a browser, ensuring layouts and interactions function as intended."
                },
                {
                    "img": "https://img.icons8.com/fluency/48/css3.png",
                    "text": "CSS",
                    "des": "CSS3 allows me to style and bring my designs to life by adding layouts, colors, animations, and responsive adjustments directly to web pages."
                },
                {
                    "img": "https://img.icons8.com/color/48/webflow.png",
                    "text": "Webflow",
                    "des": "I use Webflow to create interactive, responsive websites without needing extensive coding. It’s great for turning design concepts into functional web experiences."
                }
            ]
        },
        {
            "title": "Research and Testing Tools",
            "data": [
                {
                    "img": "https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-hotjar-a-new-powerful-tool-that-reveals-the-online-behavior-and-voice-of-your-users-logo-color-tal-revivo.png",
                    "text": "Hotjar",
                    "des": "I use Hotjar to analyze user interactions through heatmaps and session recordings, which helps me identify pain points and improve designs based on real user behavior."
                },
                {
                    "img": "https://img.icons8.com/color/48/hard-to-find.png",
                    "text": "Maze",
                    "des": "Maze allows me to test prototypes and gather actionable feedback from users. I rely on its usability tests and surveys to validate my design decisions early on."
                },
            ]
        },
        {
            "title": "Research and Testing Tools",
            "data": [
                {
                    "img": "https://img.icons8.com/color/48/nintendo.png",
                    "text": "Notion",
                    "des": "I use Notion to organize design projects, document ideas, and keep track of user research and feedback. It helps me stay structured and aligned with the team."
                },
                {
                    "img": "https://img.icons8.com/nolan/64/miro.png",
                    "text": "Miro",
                    "des": "Miro is my favorite tool for collaborative brainstorming and mapping out user flows. I use it to create visual boards and share concepts with the team during design sprints."
                },
            ]
        }


    ]
    return (
        <>
            <div className="px-4 my-16 max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                    <h1 className="text-4xl font-semibold">Stack</h1>
                    <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-2 w-2 rounded-full bg-green-500">
                            <span className="absolute h-3 w-3 rounded-full bg-green-500 animate-ping duration-3000"></span>
                        </div>
                        <p className="text-sm">Available for Projects</p>
                    </div>
                </div>
                <p className="text-gray-600 mt-6">I work with a dynamic stack of tools like Framer, Webflow, and Hotjar to bring my ideas to life. My goal is to create designs that are not only visually appealing but also optimized for usability, accessibility, and performance.</p>
                <div className=" flex flex-col gap-16 p-6 rounded-2xl mt-6 bg-white">
                    {datas.map((v, i) => (
                        <div key={i}>
                            <p className="text-lg font-semibold">{v.title}</p>
                            <div className="mt-6 grid md:grid-cols-2 gap-x-6 gap-y-10">
                                {v.data.map((v, i) => (
                                    <div key={i}>
                                        <div className="flex items-center gap-3">
                                            <div className="bg-gray-100 p-4 sm:p-6 rounded-2xl">
                                                <img src={v.img} className="size-10" alt="" />
                                            </div>
                                            <p className="font-semibold text-xl">{v.text}</p>
                                        </div>
                                        <p className="mt-3 text-sm text-gray-600">I use Framer when I need to create high-fidelity prototypes with advanced animations and micro-interactions to test user behavior and refine designs.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}