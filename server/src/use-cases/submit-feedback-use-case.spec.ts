import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

describe('Submit feedback', () => {
    it('should be able to submit a feedback', async () =>{
        const submitFeedbackUseCase = new SubmitFeedbackUseCase(
            { 
                create: createFeedbackSpy 
            }, 
            { 
                sendMail: sendMailSpy 
            });
        
        await expect(submitFeedbackUseCase.execute({
            type: 'BUG',
            comment: 'example',
            screenshot: 'data:image/png;base64test.jpg'
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
        expect(sendMailSpy).toHaveBeenCalled();
    });
});