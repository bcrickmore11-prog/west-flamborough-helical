import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Upload, FileText, X } from "lucide-react";
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";

// ============================================================
// WEB3FORMS SETUP — Replace the key below with your own.
// Get a free access key at: https://web3forms.com
// It takes 30 seconds — just enter your email address and
// they'll send you the key. Paste it here.
// ============================================================
const WEB3FORMS_ACCESS_KEY = "da65fb2b-7d71-41d6-9acf-49406b37f68f";

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    projectDetails: "",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Web3Forms supports up to 5MB file attachments
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload a file smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      setSelectedFile(file);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitData = new FormData();
      submitData.append("access_key", WEB3FORMS_ACCESS_KEY);
      submitData.append("subject", `New Project Inquiry from ${formData.firstName} ${formData.lastName}`);
      submitData.append("from_name", "West Flamborough Helical Website");
      submitData.append("First Name", formData.firstName);
      submitData.append("Last Name", formData.lastName);
      submitData.append("Phone", formData.phone);
      submitData.append("Email", formData.email);
      submitData.append("Project Details", formData.projectDetails);

      if (selectedFile) {
        submitData.append("attachment", selectedFile);
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: submitData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Success!",
          description: "Thank you for your inquiry. We'll be in touch soon!",
        });
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          projectDetails: "",
        });
        setSelectedFile(null);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
      } else {
        toast({
          title: "Error",
          description: "Failed to submit inquiry. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit inquiry. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div>
            <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Contact Us</span>
            <h2 className="text-4xl md:text-6xl font-bold uppercase mb-6 text-black leading-none">Get Your <br/>Free Quote</h2>
            <p className="text-zinc-600 text-lg mb-10 max-w-md">
              Ready to start your project on solid ground? Contact West Flamborough Helical Inc. today for a consultation.
            </p>

            <div className="space-y-8 border-t border-zinc-200 pt-8">
              <div className="flex gap-4 items-start">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold uppercase text-lg">Call Us</h3>
                  <p className="text-zinc-500 font-mono">905-630-1234</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold uppercase text-lg">Email Us</h3>
                  <p className="text-zinc-500 font-mono">brantford@goliathtechpiles.com</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold uppercase text-lg">Service Area</h3>
                  <p className="text-zinc-500">Brantford, West Flamborough/Hamilton, St George, Paris, and surrounding regions.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-2xl border-none bg-zinc-950 text-white rounded-none relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/20 rounded-bl-full" />
            
            <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
              <h3 className="text-xl font-bold uppercase mb-6">Project Inquiry</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">First Name</label>
                  <Input 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="JOHN" 
                    className="bg-white/5 border-white/10 h-12 rounded-none text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Last Name</label>
                  <Input 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="DOE" 
                    className="bg-white/5 border-white/10 h-12 rounded-none text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Phone</label>
                <Input 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 000-0000" 
                  className="bg-white/5 border-white/10 h-12 rounded-none text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Email</label>
                <Input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="EMAIL@ADDRESS.COM" 
                  className="bg-white/5 border-white/10 h-12 rounded-none text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">Project Details</label>
                <Textarea 
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..." 
                  className="min-h-[100px] bg-white/5 border-white/10 rounded-none text-white placeholder:text-white/30 focus-visible:ring-primary focus-visible:border-primary"
                  required
                />
              </div>

              {/* File Upload Section */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Project File (Optional)
                </label>
                <p className="text-xs text-zinc-500 mb-2">
                  Upload a sketch or formal plan drawings (PDF, Images, or Documents up to 5MB)
                </p>
                
                <input
                  ref={fileInputRef}
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png,.gif,.webp,.tiff,.doc,.docx,.xls,.xlsx"
                  className="hidden"
                  id="projectFile"
                />
                
                {!selectedFile ? (
                  <label
                    htmlFor="projectFile"
                    className="flex items-center justify-center gap-3 h-24 border-2 border-dashed border-white/20 hover:border-primary/50 cursor-pointer transition-colors bg-white/5"
                  >
                    <Upload className="h-6 w-6 text-zinc-400" />
                    <span className="text-zinc-400 font-bold text-sm uppercase tracking-wide">
                      Click to Upload File
                    </span>
                  </label>
                ) : (
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10">
                    <FileText className="h-8 w-8 text-primary shrink-0" />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold truncate">{selectedFile.name}</p>
                      <p className="text-xs text-zinc-500">
                        {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={removeFile}
                      className="p-1 hover:bg-white/10 rounded transition-colors"
                    >
                      <X className="h-5 w-5 text-zinc-400 hover:text-white" />
                    </button>
                  </div>
                )}
              </div>

              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full h-14 text-base font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 rounded-none border-none text-black mt-2"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </Button>
            </form>
          </Card>
          
        </div>
      </div>
    </section>
  );
}
