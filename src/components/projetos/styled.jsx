import styled from "styled-components";

export const Container = styled.section`
    padding: 100px 40px;
    background: linear-gradient(135deg, #1a0520 0%, #2d1b35 50%, #1a0520 100%);
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 25% 25%, rgba(225, 13, 253, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(175, 13, 94, 0.1) 0%, transparent 50%);
        pointer-events: none;
    }

    @media (max-width: 768px) {
        padding: 80px 20px;
    }
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 80px;

    @media (max-width: 768px) {
        margin-bottom: 60px;
    }
`;

export const Subtitle = styled.p`
    font-size: 18px;
    color: #b0b0b0;
    margin-top: 15px;
    font-weight: 300;

    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

export const ProjectsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 40px;
    max-width: 1400px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 30px;
    }
`;

export const ProjectCard = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.4s ease;
    position: relative;

    &:hover {
        transform: translateY(-10px);
        border-color: rgba(225, 13, 253, 0.5);
        box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.3),
            0 0 50px rgba(225, 13, 253, 0.2);
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #e10dfd, #af0d5e, #e10dfd);
        background-size: 200% 100%;
        animation: ${props => props.isHovered ? 'shimmer 1.5s linear infinite' : 'none'};
    }

    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }
`;

export const ImageContainer = styled.div`
    position: relative;
    height: 250px;
    overflow: hidden;
`;

export const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;

    ${ProjectCard}:hover & {
        transform: scale(1.05);
    }
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        135deg, 
        rgba(225, 13, 253, 0.2) 0%, 
        rgba(175, 13, 94, 0.2) 100%
    );
    opacity: ${props => props.isHovered ? 1 : 0};
    transition: opacity 0.3s ease;
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding: 20px;
`;

export const CategoryBadge = styled.span`
    background: rgba(225, 13, 253, 0.9);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
`;

export const ContentContainer = styled.div`
    padding: 30px;
`;

export const ProjectHeader = styled.div`
    margin-bottom: 20px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
`;

export const IconWrapper = styled.div`
    font-size: 24px;
    color: #e10dfd;
`;

export const ProjectTitle = styled.h3`
    font-size: 24px;
    font-weight: 700;
    color: #ffffff;
    margin: 0;
`;

export const ProjectDescription = styled.p`
    font-size: 16px;
    line-height: 1.6;
    color: #b0b0b0;
    margin-bottom: 25px;
`;

export const TechStack = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 30px;
`;

export const TechTag = styled.span`
    background: linear-gradient(45deg, rgba(225, 13, 253, 0.2), rgba(175, 13, 94, 0.2));
    color: #e10dfd;
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid rgba(225, 13, 253, 0.3);
`;

export const ActionButtons = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 480px) {
        flex-direction: column;
    }
`;

export const ActionButton = styled.a`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 20px;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    
    ${props => props.primary ? `
        background: linear-gradient(135deg, #e10dfd, #af0d5e);
        color: white;
        border: none;
        
        &:hover {
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(225, 13, 253, 0.4);
        }
    ` : `
        background: transparent;
        color: #e10dfd;
        border: 2px solid #e10dfd;
        
        &:hover {
            background: #e10dfd;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 8px 25px rgba(225, 13, 253, 0.3);
        }
    `}

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

    &:hover::before {
        left: 100%;
    }
`;