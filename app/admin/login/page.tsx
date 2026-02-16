import { SignIn } from "@clerk/nextjs";
import { Shield } from "lucide-react";

export default function AdminLoginPage() {
    return (
        <div
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                backgroundImage: 'url(/green-mountains.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark overlay for better readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-md px-4 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-100 mb-4">
                            <Shield className="h-8 w-8 text-amber-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">
                            Admin Portal
                        </h1>
                        <p className="text-gray-600">
                            Secure access for administrators
                        </p>
                        <div className="mt-3 px-4 py-2 bg-amber-50 border border-amber-200 rounded-lg">
                            <p className="text-xs text-amber-800">
                                🔒 This area is restricted to authorized personnel only
                            </p>
                        </div>
                    </div>

                    <SignIn
                        path="/admin/login"
                        forceRedirectUrl="/admin"
                        appearance={{
                            elements: {
                                formButtonPrimary:
                                    'bg-amber-600 hover:bg-amber-700 text-white transition-all duration-200',
                                card: 'shadow-none',
                                headerTitle: 'hidden',
                                headerSubtitle: 'hidden',
                                socialButtonsBlockButton:
                                    'border-gray-300 hover:bg-gray-50 transition-all duration-200',
                                formFieldInput:
                                    'border-gray-300 focus:border-amber-600 focus:ring-amber-600 rounded-lg',
                                footerActionLink:
                                    'text-amber-600 hover:text-amber-700',
                                identityPreviewEditButton:
                                    'text-amber-600 hover:text-amber-700',
                                formFieldLabel:
                                    'text-gray-700 font-medium',
                                dividerLine:
                                    'bg-gray-300',
                                dividerText:
                                    'text-gray-500',
                            },
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
