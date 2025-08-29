import styled from "styled-components"

export const Section = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 40px;
    padding: 80px 40px;
    background: linear-gradient(135deg, #480661 0%, #783a91 100%);
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: 
            radial-gradient(circle at 20% 50%, rgba(225, 13, 253, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(175, 13, 94, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(225, 13, 253, 0.05) 0%, transparent 50%);
        pointer-events: none;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 60px 20px;
        gap: 30px;
    }
`;

export const Card = styled.div`
    background: linear-gradient(145deg, rgba(61, 4, 82, 0.9), rgba(36, 25, 36, 0.9));
    backdrop-filter: blur(10px);
    border: 2px solid rgba(90, 12, 114, 0.5);
    border-radius: 20px;
    padding: 40px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #e10dfd, #af0d5e, #e10dfd);
        background-size: 200% 100%;
        animation: shimmer 3s linear infinite;
    }

    &:hover {
        transform: translateY(-10px);
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 50px rgba(225, 13, 253, 0.2);
        border-color: rgba(225, 13, 253, 0.8);
    }

    h2 {
        font-weight: 600;
        font-size: 28px;
        margin-bottom: 30px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(225, 13, 253, 0.5);
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            width: 60px;
            height: 3px;
            background: linear-gradient(90deg, #e10dfd, #af0d5e);
            border-radius: 2px;
        }
    }

    .content {
        p {
            font-size: 16px;
            line-height: 1.8;
            color: #e0e0e0;
            text-align: left;
            margin-bottom: 0;
        }
    }

    .libraries-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 20px;
        margin-top: 20px;

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
        }
    }

    @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
    }

    @media (max-width: 768px) {
        padding: 30px 20px;
        
        h2 {
            font-size: 24px;
        }
    }
`;

export const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    margin-top: 20px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 20px;
    }
`;

export const SkillItem = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 20px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(45deg, ${props => props.color}22, transparent);
        opacity: 0;
        transition: opacity 0.3s ease;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-5px);
        border-color: ${props => props.color};
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

        &::before {
            opacity: 1;
        }

        .icon {
            color: ${props => props.color};
            transform: scale(1.2);
        }

        .progress-fill {
            background: linear-gradient(90deg, ${props => props.color}, ${props => props.color}aa);
        }
    }

    .skill-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;

        .icon {
            font-size: 28px;
            color: #ffffff;
            transition: all 0.3s ease;
        }

        .name {
            font-size: 16px;
            font-weight: 600;
            color: #ffffff;
        }
    }

    .progress-bar {
        width: 100%;
        height: 8px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 10px;
        position: relative;

        .progress-fill {
            height: 100%;
            background: linear-gradient(90deg, #e10dfd, #af0d5e);
            border-radius: 4px;
            transition: all 0.8s ease;
            position: relative;

            &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                animation: progressShine 2s ease-in-out infinite;
            }
        }
    }

    .level {
        font-size: 14px;
        font-weight: 600;
        color: #e10dfd;
        text-align: right;
        display: block;
    }

    @keyframes progressShine {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
    }
`;

export const LibraryItem = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 15px;
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02));
    border: 1px solid rgba(155, 56, 185, 0.3);
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(225, 13, 253, 0.1), transparent);
        transition: left 0.5s ease;
    }

    &:hover {
        transform: translateX(10px);
        border-color: #e10dfd;
        box-shadow: 0 5px 20px rgba(225, 13, 253, 0.2);

        &::before {
            left: 100%;
        }

        .icon {
            color: #e10dfd;
            transform: scale(1.2);
        }
    }

    .icon {
        font-size: 24px;
        color: #9b38b9;
        transition: all 0.3s ease;
        flex-shrink: 0;
    }

    .name {
        font-size: 14px;
        font-weight: 500;
        color: #ffffff;
        text-align: left;
    }

    @media (max-width: 768px) {
        justify-content: center;
        text-align: center;
    }
`;