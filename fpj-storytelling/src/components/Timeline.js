import React from 'react';

// Define the stages of the timeline to match your sections
const stages = [
  { name: 'Molecule', color: '#06b6d4' }, // Cyan
  { name: 'Preclinical', color: '#ec4899' }, // Pink
  { name: 'Clinical', color: '#84cc16' }, // Lime
  { name: 'Regulatory', color: '#06b6d4' }, // Cyan
  { name: 'Manufacturing', color: '#ec4899' }, // Pink
  { name: 'Launch', color: '#84cc16' } // Lime
];

const Timeline = ({ scrollYProgress }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (scrollYProgress) {
      const unsubscribe = scrollYProgress.onChange((latest) => {
        // Map scroll progress to active stage index (0 to 5)
        const progress = Math.max(0, Math.min(1, latest));
        const index = Math.floor(progress * stages.length);
        const clampedIndex = Math.min(index, stages.length - 1);
        setActiveIndex(clampedIndex);
      });

      return unsubscribe;
    }
  }, [scrollYProgress]);

  return (
    <div className="fixed left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
      <div className="bg-black/20 backdrop-blur-sm rounded-lg p-3">
        {stages.map((stage, index) => (
          <div
            key={stage.name}
            className="flex items-center py-2 transition-all duration-300"
          >
            <div
              className="w-4 h-4 rounded-full mr-3 border-2 border-white/50 transition-all duration-300"
              style={{
                backgroundColor: index <= activeIndex ? stage.color : 'transparent',
                transform: index === activeIndex ? 'scale(1.2)' : 'scale(1)',
                boxShadow: index === activeIndex ? `0 0 10px ${stage.color}` : 'none'
              }}
            />
            <span 
              className="text-sm font-medium transition-all duration-300"
              style={{
                color: index <= activeIndex ? 'white' : 'rgba(255, 255, 255, 0.6)',
                transform: index === activeIndex ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {stage.name}
            </span>
            {index === activeIndex && (
              <div className="ml-2">
                <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              </div>
            )}
          </div>
        ))}
        
        {/* Progress bar */}
        <div className="mt-4 w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-pink-500 via-lime-500 via-cyan-500 via-pink-500 to-lime-600 transition-all duration-500 rounded-full"
            style={{ 
              width: `${((activeIndex + 1) / stages.length) * 100}%` 
            }}
          />
        </div>
        
        {/* Stage indicator */}
        <div className="mt-2 text-center">
          <span className="text-xs text-white/80">
            Stage {activeIndex + 1} of {stages.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
