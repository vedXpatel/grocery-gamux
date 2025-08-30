#!/bin/bash

echo "🚀 Preparing for Vercel deployment..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo "🌐 Ready for deployment to Vercel"
    echo ""
    echo "Next steps:"
    echo "1. Push your code to GitHub:"
    echo "   git add ."
    echo "   git commit -m 'Ready for deployment'"
    echo "   git push origin main"
    echo ""
    echo "2. Deploy to Vercel:"
    echo "   - Go to https://vercel.com"
    echo "   - Import your GitHub repository"
    echo "   - Click 'Deploy'"
    echo ""
    echo "Or use Vercel CLI:"
    echo "   npm i -g vercel"
    echo "   vercel"
else
    echo "❌ Build failed! Please check for errors."
    exit 1
fi
