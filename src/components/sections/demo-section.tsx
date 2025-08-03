import { useState } from "react";
import { Play, X } from "lucide-react";
import { SectionContainer } from "@/components/ui/section-container";
import { Modal } from "@/components/ui/modal";

export function DemoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <h2 className="heading-lg mb-6">
          See <span className="text-gradient">ADmyBRAND AI</span> in Action
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Watch how our AI transforms your marketing strategy in minutes, not months.
        </p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Video Thumbnail */}
        <div 
          className="relative glass-card overflow-hidden rounded-xl cursor-pointer group"
          onClick={() => setIsVideoOpen(true)}
        >
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 group-hover:bg-white/30 transition-colors">
                <Play className="w-8 h-8 text-white ml-1" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Product Demo
              </h3>
              <p className="text-white/80">
                3 minutes • See the full AI workflow
              </p>
            </div>
          </div>
          
          {/* Floating elements for visual appeal */}
          <div className="absolute top-4 left-4 glass-card px-3 py-1 text-sm text-white">
            ✨ AI Generated
          </div>
          <div className="absolute bottom-4 right-4 glass-card px-3 py-1 text-sm text-white">
            HD Quality
          </div>
        </div>

        {/* Feature highlights around the video */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">1</span>
            </div>
            <h4 className="font-semibold mb-2">Upload Your Brand</h4>
            <p className="text-sm text-muted-foreground">
              Simply upload your brand assets and guidelines
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">2</span>
            </div>
            <h4 className="font-semibold mb-2">AI Analyzes & Creates</h4>
            <p className="text-sm text-muted-foreground">
              Our AI understands your brand and generates content
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold">3</span>
            </div>
            <h4 className="font-semibold mb-2">Deploy Across Channels</h4>
            <p className="text-sm text-muted-foreground">
              Automatically distribute to all your marketing channels
            </p>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} className="max-w-5xl">
        <div className="relative">
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute -top-2 -right-2 z-10 p-2 bg-background rounded-full shadow-lg hover:bg-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
            {/* Placeholder for actual video */}
            <div className="text-center">
              <Play className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
              <p className="text-muted-foreground">
                Video player would be integrated here
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                (Replace this with your actual video URL or embed code)
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </SectionContainer>
  );
}