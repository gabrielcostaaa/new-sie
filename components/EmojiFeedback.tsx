'use client';

import { Angry, Frown, Meh, Smile, Laugh } from 'lucide-react';

const EmojiFeedback = ({ rating }) => {
    const emojiSize = 40;
    let emoji, text;

    if (rating <= 5) {
        emoji = <Angry className="text-red-500" size={emojiSize} />;
        text = "Muito Insatisfeito";
    } else if (rating > 5 && rating <= 9) {
        emoji = <Frown className="text-orange-500" size={emojiSize} />;
        text = "Insatisfeito";
    } else if (rating > 9 && rating <= 13) {
        emoji = <Meh className="text-yellow-500" size={emojiSize} />;
        text = "Regular";
    } else if (rating > 13 && rating <= 17) {
        emoji = <Smile className="text-green-500" size={emojiSize} />;
        text = "Satisfeito";
    } else if (rating > 17) {
        emoji = <Laugh className="text-blue-500" size={emojiSize} />;
        text = "Muito Satisfeito";
    } else {
        return null;
    }

    return (
        <div className="flex items-center">
            {emoji}
            <span className="ml-2 text-lg font-medium text-gray-700">{text}</span>
        </div>
    );
};

export default EmojiFeedback;
