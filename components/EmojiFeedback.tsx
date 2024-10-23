'use client';

import { Angry, Frown, Meh, Smile, Laugh, HeartCrack } from 'lucide-react';

const EmojiFeedback = ({ rating }) => {
    const emojiSize = 40;
    let emoji, text, description;

    if (rating <= 0) {
        emoji = <HeartCrack className="text-gray-300" size={emojiSize} />;
        text = "Nenhuma avaliação atribuída";
        description = "O evento ainda nao foi avaliado por você.";
    } else if (rating > 0 && rating <= 5) {
        emoji = <Angry className="text-red-500" size={emojiSize} />;
        text = "Péssimo";
        description = "O evento foi muito abaixo das expectativas.";
    } else if (rating > 5 && rating <= 9) {
        emoji = <Frown className="text-orange-500" size={emojiSize} />;
        text = "Ruim";
        description = "O evento foi abaixo das expectativas.";
    } else if (rating > 9 && rating <= 13) {
        emoji = <Meh className="text-yellow-500" size={emojiSize} />;
        text = "Razoável";
        description = "O evento foi dentro das expectativas.";
    } else if (rating > 13 && rating <= 17) {
        emoji = <Smile className="text-green-500" size={emojiSize} />;
        text = "Bom";
        description = "O evento foi acima das expectativas.";
    } else if (rating > 17) {
        emoji = <Laugh className="text-blue-500" size={emojiSize} />;
        text = "Excelente";
        description = "O evento foi muito acima das expectativas.";
    }

    return (
        <div className="flex items-center mt-4">
            {emoji}
            <div className='ml-2'>
                <span className="text-lg font-medium text-gray-700">{text}</span>
                <p className='font-light text-gray-600'>{description}</p>
            </div>
        </div>
    );
};

export default EmojiFeedback;

