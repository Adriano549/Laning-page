import styled from "styled-components"

export const Section = styled.section`
    padding: 100px 40px;
    background: linear-gradient(135deg, #1a0520 0%, #2d1b35 50%, #1a0520 100%);
    text-align: center;
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
            radial-gradient(circle at 25% 25%, rgba(225, 13, 253, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 75% 75%, rgba(175, 13, 94, 0.08) 0%, transparent 60%),
            radial-gradient(circle at 50% 50%, rgba(225, 13, 253, 0.03) 0%, transparent 80%);
        pointer-events: none;
    }

    h2 {
        font-weight: 600;
        font-size: 36px;
        margin-bottom: 60px;
        color: #ffffff;
        text-shadow: 0 0 20px rgba(225, 13, 253, 0.5);
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
            width: 100px;
            height: 4px;
            background: linear-gradient(90deg, #e10dfd, #af0d5e);
            border-radius: 2px;
        }
    }

    @media (max-width: 768px) {
        padding: 80px 20px;
        
        h2 {
            font-size: 28px;
            margin-bottom: 40px;
        }
    }
`;

export const SoftSkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 25px;
    }
`;

export const SoftSkillItem = styled.div`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02));
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 30px;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    text-align: left;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 3px;
        background: linear-gradient(90deg, ${props => props.color}, ${props => props.color}aa);
        transform: scaleX(0);
        transition: transform 0.4s ease;
        transform-origin: left;
    }

    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, ${props => props.color}15 0%, transparent 70%);
        opacity: 0;
        transition: opacity 0.4s ease;
        pointer-events: none;
    }

    &:hover {
        transform: translateY(-8px) scale(1.02);
        border-color: ${props => props.color}80;
        box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            0 0 30px ${props => props.color}40;

        &::before {
            transform: scaleX(1);
        }

        &::after {
            opacity: 1;
        }

        .icon-container {
            transform: scale(1.1) rotate(5deg);
            
            .icon {
                color: ${props => props.color};
                text-shadow: 0 0 20px ${props => props.color}80;
            }
        }

        .skill-name {
            color: ${props => props.color};
        }
    }

    .icon-container {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 70px;
        background: linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 50%;
        margin-bottom: 20px;
        transition: all 0.4s ease;

        .icon {
            font-size: 28px;
            color: #ffffff;
            transition: all 0.4s ease;
        }
    }

    .content {
        .skill-name {
            font-size: 20px;
            font-weight: 600;
            color: #ffffff;
            margin-bottom: 12px;
            transition: color 0.3s ease;
        }

        .skill-description {
            font-size: 14px;
            line-height: 1.6;
            color: #b0b0b0;
            margin: 0;
        }
    }

    @media (max-width: 768px) {
        padding: 25px;
        text-align: center;

        .icon-container {
            width: 60px;
            height: 60px;
            margin: 0 auto 15px;

            .icon {
                font-size: 24px;
            }
        }

        .content {
            .skill-name {
                font-size: 18px;
                margin-bottom: 10px;
            }

            .skill-description {
                font-size: 13px;
                line-height: 1.5;
            }
        }
    }
`;