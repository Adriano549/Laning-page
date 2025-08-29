import styled from "styled-components";

export const Section = styled.section`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 120px 20px 60px;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(225, 13, 253, 0.1) 0%, rgba(175, 13, 94, 0.1) 100%);
        z-index: -1;
    }

    @media (max-width: 768px) {
        padding: 100px 15px 40px;
        min-height: auto;
    }
`;

export const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    max-width: 1200px;
    width: 100%;
    align-items: center;
    
    opacity: ${props => props.isVisible ? 1 : 0};
    transform: ${props => props.isVisible ? 'translateY(0)' : 'translateY(50px)'};
    transition: all 0.8s ease-out;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

export const TitleContainer = styled.div`
    h1 {
        font-size: clamp(28px, 5vw, 48px);
        font-weight: 700;
        color: #ffffff;
        margin-bottom: 15px;
        line-height: 1.2;
        text-shadow: 0 0 20px rgba(225, 13, 253, 0.5);
        
        @media (max-width: 768px) {
            font-size: 32px;
        }
    }
`;

export const TypewriterText = styled.h2`
    font-size: clamp(18px, 3vw, 24px);
    font-weight: 400;
    color: #e10dfddd;
    position: relative;
    overflow: hidden;
    border-right: 3px solid #e10dfddd;
    white-space: nowrap;
    animation: typing 3s steps(40, end), blink-caret 0.75s step-end infinite;
    
    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
    }
    
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #e10dfddd; }
    }

    @media (max-width: 768px) {
        font-size: 20px;
        border-right: none;
        animation: none;
        white-space: normal;
    }
`;

export const SocialContainer = styled.div`
    display: flex;
    gap: 20px;
    
    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const SocialLink = styled.a`
    font-size: 40px;
    color: #ffffff;
    transition: all 0.3s ease;
    position: relative;

    &:hover {
        color: #e10dfddd;
        transform: translateY(-5px) scale(1.1);
        filter: drop-shadow(0 10px 20px rgba(225, 13, 253, 0.4));
    }

    &:nth-child(1):hover { color: #333; }
    &:nth-child(2):hover { color: #E4405F; }
    &:nth-child(3):hover { color: #0077B5; }
`;

export const DownloadButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 15px 30px;
    background: linear-gradient(135deg, #e10dfd7a, #af0d5e);
    color: #fff;
    text-decoration: none;
    border-radius: 50px;
    font-weight: bold;
    font-size: 16px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 15px rgba(225, 13, 253, 0.3);
    border: 2px solid transparent;
    position: relative;
    overflow: hidden;
    max-width: fit-content;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    &:hover {
        background: linear-gradient(135deg, #af0d5e, #e10dfd);
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(225, 13, 253, 0.5);
        border-color: #ffffff;

        &::before {
            left: 100%;
        }
    }

    @media (max-width: 768px) {
        align-self: center;
        padding: 12px 25px;
        font-size: 14px;
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;

    @media (max-width: 768px) {
        margin-top: 10px;
    }
`;

export const ProfileContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ProfileImageWrapper = styled.div`
    position: relative;
    
    img {
        width: 280px;
        height: 280px;
        border-radius: 50%;
        object-fit: cover;
        border: 4px solid #e10dfddd;
        box-shadow: 
            0 0 0 4px rgba(225, 13, 253, 0.3),
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 50px rgba(225, 13, 253, 0.2);
        transition: all 0.3s ease;
        z-index: 2;
        position: relative;

        &:hover {
            transform: scale(1.05);
            box-shadow: 
                0 0 0 8px rgba(225, 13, 253, 0.4),
                0 30px 60px rgba(0, 0, 0, 0.6),
                0 0 80px rgba(225, 13, 253, 0.3);
        }

        @media (max-width: 768px) {
            width: 220px;
            height: 220px;
        }
    }
`;

export const ProfileOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(45deg, transparent 30%, rgba(225, 13, 253, 0.1) 100%);
    z-index: 1;

    .glow {
        position: absolute;
        top: -10px;
        left: -10px;
        right: -10px;
        bottom: -10px;
        border-radius: 50%;
        background: linear-gradient(45deg, #e10dfd, #af0d5e, #e10dfd);
        opacity: 0;
        animation: pulse 3s ease-in-out infinite;
        z-index: -1;
    }

    @keyframes pulse {
        0%, 100% { opacity: 0; transform: scale(1); }
        50% { opacity: 0.3; transform: scale(1.1); }
    }
`;